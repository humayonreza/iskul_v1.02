import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { StateService } from 'src/app/services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-combassessmentsq',
  templateUrl: './combassessmentsq.component.html',
  styleUrls: ['./combassessmentsq.component.scss'],
})
export class CombassessmentsqComponent implements OnInit {
  isCompletedAssessment2: boolean = false;
  answer: any = [];
  ques: any = [];
  isDisabled: boolean = true;
  counter: number = 0;
  submit_text: string = 'Submit';
  isSubmitted: boolean = false;
  @Input() arrAssessmentTypeSQ: any = [];
  @Input() arrKeyObj: any = {};
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    private _snackBar: MatSnackBar
  ) {}

  create_session_id() {
    const d = new Date();
    return d.getTime();
  }

  arrObjAssessment: any = [];

  submit_answer(data: any) {
    if (data.answer == '') {
      this.openSnackBar('Answer field cannot be empty..', 'Close', {});
    } else {
      console.log(data);
      if (this.arrObjAssessment.length == 0) {
        this.arrObjAssessment.push(data);
      } else {
        let index = this.arrObjAssessment.findIndex(
          (p: any) => p.question_id == data.question_id
        );
        if (index == -1) {
          this.arrObjAssessment.push(data);
        } else {
          this.arrObjAssessment[index].answer = data.answer;
        }
      }

      for (let k = 0; k < this.arrAssessmentTypeSQ.length; k++) {
        if (this.arrAssessmentTypeSQ[k].question_id == data.question_id) {
          this.arrAssessmentTypeSQ[k].is_correct = 1;
        }
      }
      console.log(this.arrObjAssessment);
      if (this.arrAssessmentTypeSQ.length == this.arrObjAssessment.length) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    }
  }

  on_typing_answer(question_id: number) {
    for (let k = 0; k < this.arrAssessmentTypeSQ.length; k++) {
      if (this.arrAssessmentTypeSQ[k].question_id == question_id) {
        this.arrAssessmentTypeSQ[k].is_correct = 0;
      }
    }
  }

  submit_answer_for_assessment() {
    let now = dayjs();
    let prog = {
      session_id: this.create_session_id(),
      student_id: this.arrKeyObj.student_id,
      course_id: this.arrKeyObj.course_id,
      module_id: this.arrKeyObj.module_id,
      assessment_type: this.arrKeyObj.assessment_type,
      question_type: this.arrKeyObj.question_type,
      has_completed: 2,
      remarks: 'SQ - To be assessed',
      date_time: now.format('YYYY-MM-DD') + ' ' + now.format('HH:mm:ss'),
      chCode: 'hg_gt78999@%^&',
      queryId: '3',
    };
    this.save_data_to_student_progress(prog);
  }

  save_data_to_student_progress(data: any) {
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);
        for (let i = 0; i < this.arrObjAssessment.length; i++) {
          let params = {
            session_id: data.session_id,
            question_id: this.arrObjAssessment[i].question_id,
            answer: this.arrObjAssessment[i].answer,
            isPassed: 0,
            chCode: 'hg_gt78999@%^&',
            queryId: '4',
          };
          console.log(params);
          this.save_data_to_progress_breakdown(params);
        }
        this.isSubmitted = true;
        let progState = {
          ser: '0',
          session_id: data.session_id,
          student_id: this.arrKeyObj.student_id,
          course_id: this.arrKeyObj.course_id,
          module_id: this.arrKeyObj.module_id,
          assessment_type: this.arrKeyObj.assessment_type,
          question_type: this.arrKeyObj.question_type,
          has_completed: 2,
        };
        this.update_student_progress_state(progState);
      }
    });
  }

  update_student_progress_state(state: any) {
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      const obj = JSON.parse(sess_info);
      console.log('StateService Params PS : ', state);
      if (state.assessment_type == 1) {
        obj.student.courses.progress.arrProgressAssessment1.push(state);
        localStorage.setItem('session_data', JSON.stringify(obj));
        this.stateService.isQuizCompleted = true;
      } else if (state.assessment_type == 2) {
        obj.student.courses.progress.arrProgressAssessment2.push(state);
        localStorage.setItem('session_data', JSON.stringify(obj));
        this.stateService.isQuizCompleted = true;
      } else if (state.assessment_type == 3) {
        obj.student.courses.progress.arrProgressAssessment3.push(state);
        localStorage.setItem('session_data', JSON.stringify(obj));
        this.stateService.isQuizCompleted = true;
        console.log(
          'StateService Params SQ : ',
          obj.student.courses.progress.arrProgressAssessment3
        );
      }
    }
  }

  // update_student_progress_state(state: any) {
  //   const sess_info = localStorage.getItem('session_ls');
  //   if (sess_info != null) {
  //     const data = JSON.parse(sess_info);
  //     console.log('StateService Params PS : ', state);
  //     if (state.assessment_type == 1) {
  //       data.progress_assessment1.push(state);
  //       console.log('StateService PS : ', data);
  //       localStorage.removeItem('session_ls');
  //       localStorage.setItem('session_ls', JSON.stringify(data));
  //     } else if (state.assessment_type == 2) {
  //       data.progress_assessment2.push(state);
  //       localStorage.removeItem('session_ls');
  //       localStorage.setItem('session_ls', JSON.stringify(data));
  //       console.log('progress_assessment2@MC :', data.progress_assessment2);
  //     } else if (state.assessment_type == 3) {
  //       data.progress_assessment3.push(state);
  //       localStorage.removeItem('session_ls');
  //       localStorage.setItem('session_ls', JSON.stringify(data));
  //       console.log('progress_assessment3@FB :', data.progress_assessment3);
  //     }
  //   }
  // }

  save_data_to_progress_breakdown(data: any) {
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);
        return;
      }
    });
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['bg-snackbar'],
    });
  }

  ngOnInit(): void {
    const sess_info = localStorage.getItem('session_ls');
    if (sess_info != null) {
      let data = JSON.parse(sess_info);
      let index = data.progress_assessment3.findIndex(
        (p: any) =>
          p.question_type == this.arrKeyObj.question_type &&
          p.has_completed == 1
      );

      if (index == -1) {
        console.log('Ques List  :', this.arrAssessmentTypeSQ);
        console.log('Student ID : ', this.arrKeyObj.student_id);
        this.isSubmitted = false;
        for (let k = 0; k < this.arrAssessmentTypeSQ.length; k++) {
          this.arrAssessmentTypeSQ[k].answer = '';
        }
      } else {
        this.isSubmitted = true;
        console.log('Already Completed...');
      }
    }
  }
}
