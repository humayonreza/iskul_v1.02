import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { StateService } from 'src/app/services/state.service';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-combassessmentmc',
  templateUrl: './combassessmentmc.component.html',
  styleUrls: ['./combassessmentmc.component.scss'],
})
export class CombassessmentmcComponent implements OnInit {
  checkedarray: any = [];
  objAnswer: any = [];
  arrResp: any = [];
  checkboxcolor: ThemePalette = 'primary';
  isDisabled: boolean = false;
  next: number = 0;
  isProgressed: boolean = false;
  isCompletedAssessment2: boolean = false;
  arrAssessmentResult: any = [];
  error_count: number = 0;
  result: string = '';
  checkbox: any = [];
  arrResult: any = [];
  counter: number = 0;
  isSubmitBtnDisabled: boolean = false;
  @Input() arrAssessmentTypeMCTF: any = [];
  @Input() arrKeyObj: any = {};
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    private _snackBar: MatSnackBar
  ) {}

  on_option_changed(ques: any, selected_option_id: string) {
    // console.log('Question ID : ', ques.question_id);
    // console.log('question_type : ', ques.question_type);
    // console.log('answer : ', ques.answer);
    // console.log('selected_option_id : ', selected_option_id);
    let resp = {
      question_id: ques.question_id,
      question_type: ques.question_type,
      answer: ques.answer,
      option_id: selected_option_id,
    };
    if (ques.question_type == 0) {
      if (this.arrResp.length == 0) {
        this.arrResp.push(resp);
      } else {
        let index = this.arrResp.findIndex(
          (p: any) =>
            p.question_id == ques.question_id &&
            p.question_type == ques.question_type
        );
        if (index == -1) {
          this.arrResp.push(resp);
        } else {
          this.arrResp[index].option_id = selected_option_id;
        }
      }
      for (let i = 0; i < ques.options.length; i++) {
        ques.options[i].is_selected =
          ques.options[i].option_id == selected_option_id ? 1 : 0;
      }
    } else {
      if (this.arrResp.length == 0) {
        this.arrResp.push(resp);
        // console.log('push when empty');
        for (let i = 0; i < ques.options.length; i++) {
          if (ques.options[i].option_id == selected_option_id) {
            ques.options[i].is_selected = 1;
          }
        }
      } else {
        let n = this.arrResp.findIndex(
          (p: any) =>
            p.question_id == ques.question_id &&
            p.option_id == selected_option_id
        );
        if (n == -1) {
          this.arrResp.push(resp);
          for (let i = 0; i < ques.options.length; i++) {
            if (ques.options[i].option_id == selected_option_id) {
              ques.options[i].is_selected = 1;
            }
          }
        } else {
          // console.log('splice');
          this.arrResp.splice(n, 1);
          for (let i = 0; i < ques.options.length; i++) {
            if (ques.options[i].option_id == selected_option_id) {
              ques.options[i].is_selected = 0;
            }
          }
        }
      }
    }
    // console.log('arrResp : ', this.arrResp);
  }

  process_result(question_id: number, answer: string, index: number) {
    let data = this.arrResp.filter((p: any) => p.question_id == question_id);
    if (data.length == 0) {
      // console.log('Not all questions are answered..');
      this.openSnackBar(
        'Please attend all questions. Reset and start again...',
        'Close',
        {}
      );
    } else if (data.length == 1) {
      // console.log('One row', data);
      if (data[0].option_id == answer) {
        this.arrResult.push({ question_id, is_correct: 1 });
        this.arrAssessmentTypeMCTF[index].is_correct = 1;
      } else {
        this.arrResult.push({ question_id, is_correct: 0 });
        this.arrAssessmentTypeMCTF[index].is_correct = 0;
      }
    } else if (data.length == 2) {
      let optionID = data[0].option_id + data[1].option_id;
      // console.log('multiple rows', optionID);
      if (
        answer.indexOf(data[0].option_id) > -1 &&
        answer.indexOf(data[1].option_id) > -1
      ) {
        this.arrResult.push({ question_id, is_correct: 1 });
        this.arrAssessmentTypeMCTF[index].is_correct = 1;
      } else {
        this.arrResult.push({ question_id, is_correct: 0 });
        this.arrAssessmentTypeMCTF[index].is_correct = 0;
      }
      // if (optionID == answer) {
      //   this.arrResult.push({ question_id, is_correct: 1 });
      //   this.arrAssessmentTypeMCTF[index].is_correct = 1;
      // } else {
      //   this.arrResult.push({ question_id, is_correct: 0 });
      //   this.arrAssessmentTypeMCTF[index].is_correct = 0;
      // }
    } else if (data.length == 3) {
      let optionID = data[0].option_id + data[1].option_id + data[2].option_id;
      // console.log('multiple rows', optionID);
      if (
        answer.indexOf(data[0].option_id) > -1 &&
        answer.indexOf(data[1].option_id) > -1 &&
        answer.indexOf(data[2].option_id) > -1
      ) {
        this.arrResult.push({ question_id, is_correct: 1 });
        this.arrAssessmentTypeMCTF[index].is_correct = 1;
      } else {
        this.arrResult.push({ question_id, is_correct: 0 });
        this.arrAssessmentTypeMCTF[index].is_correct = 0;
      }
    }
  }

  process_answer_for_assessment() {
    for (let index = 0; index < this.arrAssessmentTypeMCTF.length; index++) {
      if (this.arrAssessmentTypeMCTF[index].is_correct == 0) {
        this.process_result(
          this.arrAssessmentTypeMCTF[index].question_id,
          this.arrAssessmentTypeMCTF[index].answer,
          index
        );
      } else {
        console.log('Already assessed');
      }
    }
    console.log('Result : summary : ', this.arrResult);
    console.log('Final : summary : ', this.arrAssessmentTypeMCTF);
    let data = this.arrAssessmentTypeMCTF.filter((p: any) => p.is_correct == 0);
    if (data.length > 0) {
      console.log('Not Ready to update database');
    } else {
      console.log('Ready to update database');
      this.update_student_progress_by_student_id();
    }
  }

  update_student_progress_by_student_id() {
    this.openSnackBar('Well done...this module is complete', 'Close', {});
    let now = dayjs();
    let data = {
      session_id: this.create_session_id(),
      student_id: this.arrKeyObj.student_id,
      course_id: this.arrKeyObj.course_id,
      module_id: this.arrKeyObj.module_id,
      assessment_type: this.arrKeyObj.assessment_type,
      question_type: this.arrKeyObj.question_type,
      has_completed: 1,
      remarks:
        this.arrKeyObj.assessment_type == 1
          ? 'QUIZ - completed'
          : 'Assessment ' + this.arrKeyObj.module_id + ' - completed',
      date_time: now.format('YYYY-MM-DD') + ' ' + now.format('HH:mm:ss'),
      chCode: 'hg_gt78999@%^&',
      queryId: '3',
    };
    // console.log(data);
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        // console.log('Data : ', resp);
        this.isSubmitBtnDisabled = true;
        for (let k = 0; k < this.arrAssessmentTypeMCTF.length; k++) {
          let params = {
            session_id: data.session_id,
            question_id: this.arrAssessmentTypeMCTF[k].question_id,
            answer: this.arrAssessmentTypeMCTF[k].answer,
            isPassed: 1,
            chCode: 'hg_gt78999@%^&',
            queryId: '4',
          };
          // console.log(params);
          this.save_data_to_progress_breakdown(params);
        }
        let progState = {
          ser: '0',
          session_id: data.session_id,
          student_id: this.arrKeyObj.student_id,
          course_id: this.arrKeyObj.course_id,
          module_id: this.arrKeyObj.module_id,
          assessment_type: this.arrKeyObj.assessment_type,
          question_type: this.arrKeyObj.question_type,
          question_id:
            this.arrKeyObj.assessment_type == 1
              ? this.arrKeyObj.question_id
              : null,
          has_completed: 1,
        };
        this.update_student_progress_state(progState);
      }
    });
  }

  update_student_progress_state(state: any) {
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      const obj = JSON.parse(sess_info);

      if (state.assessment_type == 1) {
        obj.student.courses.progress.arrProgressAssessment1.push(state);
        localStorage.setItem('session_data', JSON.stringify(obj));
        this.stateService.isQuizCompleted = true;
        console.log(
          'StateService Params MC : ',
          obj.student.courses.progress.arrProgressAssessment1
        );
      } else if (state.assessment_type == 2) {
        obj.student.courses.progress.arrProgressAssessment2.push(state);
        localStorage.setItem('session_data', JSON.stringify(obj));
        this.stateService.isModuleCompleted = true;
      } else if (state.assessment_type == 3) {
        obj.student.courses.progress.arrProgressAssessment3.push(state);
        localStorage.setItem('session_data', JSON.stringify(obj));
        console.log(
          'StateService Params MC : ',
          obj.student.courses.progress.arrProgressAssessment3
        );
      }
    }
  }

  save_data_to_progress_breakdown(data: any) {
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        // console.log('No data...');
      } else {
        // console.log('Data : ', resp);
        return;
      }
    });
  }

  create_session_id() {
    const d = new Date();
    return d.getTime();
  }

  reset_assessment() {
    this.objAnswer = [];
    this.arrAssessmentResult = [];
    this.error_count = 0;
    for (let i = 0; i < this.arrAssessmentTypeMCTF.length; i++) {
      this.arrAssessmentTypeMCTF[i].is_correct = true;
    }
    for (let i = 0; i < this.arrAssessmentTypeMCTF.length; i++) {
      for (let k = 0; k < this.arrAssessmentTypeMCTF[i].options.length; k++) {
        this.arrAssessmentTypeMCTF[i].options[k].is_selected = 0;
      }
    }
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  ngOnInit(): void {
    const sess_info = localStorage.getItem('session_data');
    // Need to check ????
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      let index = obj.student.courses.progress.arrProgressAssessment3.findIndex(
        (p: any) => p.question_type == this.arrKeyObj.question_type
      );
      if (index == -1) {
        console.log('Ques List  :', this.arrAssessmentTypeMCTF);
        console.log('Student ID : ', this.arrKeyObj.student_id);
      } else {
        console.log('Already Completed...');
      }
    }
  }
}
