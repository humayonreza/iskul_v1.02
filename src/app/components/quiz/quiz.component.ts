import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { StateService } from 'src/app/services/state.service';
import * as dayjs from 'dayjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  checkedarray: any = [];
  objAnswer: any = [];
  isDisabled: boolean = false;
  next: number = 0;
  result: string = '';
  isProgressed: boolean = false;
  @Input() arrAssessmentTypeQUIZ: any = {};
  @Input() arrKeyObj: any = {};
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    private _snackBar: MatSnackBar
  ) {}

  select_option(
    option_id_selected: string,
    option_text: string,
    type: string,
    test_category: string
  ) {
    console.log(option_id_selected);
    if (test_category == 'quiz') {
      if (type == 'mc') {
        if (option_id_selected == 'D' && option_text == 'All of the above') {
          let i = this.objAnswer.findIndex((p: any) => p.option_id == 'D');
          if (i == -1) {
            this.checkedarray = ['0', '1', '2', '3'];
            this.isDisabled = true;
            this.objAnswer = [];
            this.next = 0;
            let ans = {
              ser: this.next++,
              option_id: option_id_selected,
              option_text: option_text,
            };
            this.objAnswer.push(ans);
          } else {
            this.checkedarray = ['', '', '', ''];
            this.isDisabled = false;
            this.objAnswer = [];
            this.next = 0;
          }
          console.log(this.objAnswer);
        } else if (
          option_id_selected == 'D' &&
          option_text == 'None of the above'
        ) {
          let i = this.objAnswer.findIndex((p: any) => p.option_id == 'D');
          if (i == -1) {
            this.checkedarray = ['', '', '', '3'];
            this.isDisabled = true;
            this.objAnswer = [];
            this.next = 0;
            let ans = {
              ser: this.next++,
              option_id: option_id_selected,
              option_text: option_text,
            };
            this.objAnswer.push(ans);
          } else {
            this.checkedarray = ['', '', '', ''];
            this.isDisabled = false;
            this.objAnswer = [];
            this.next = 0;
          }
          console.log(this.objAnswer);
        } else {
          let k = this.objAnswer.findIndex(
            (p: any) => p.option_id == option_id_selected
          );
          if (k == -1) {
            let ans = {
              ser: this.next++,
              option_id: option_id_selected,
              option_text: option_text,
            };
            this.objAnswer.push(ans);
          } else {
            this.objAnswer.splice(k, 1);
          }
          console.log(this.objAnswer);
        }
      }
    }
  }

  // on_option_select(ques: any, n: number, i: number) {
  //   console.log('NI', n + ' ' + i);
  //   if (this.objAnswer.length == 0) {
  //     let data = {
  //       id: n + '-' + i,
  //       option_id: ques.options[i].option_id,
  //       option_text: ques.options[i].option_text,
  //     };
  //     ques.options[i].is_selected = 1;
  //     this.objAnswer.push(data);
  //   } else {
  //     const num = n + '-' + i;
  //     let m = this.objAnswer.findIndex((p: any) => p.id == num);
  //     if (m == -1) {
  //       let data = {
  //         id: n + '-' + i,
  //         option_id: ques.options[i].option_id,
  //         option_text: ques.options[i].option_text,
  //       };
  //       ques.options[i].is_selected = 1;
  //       this.objAnswer.push(data);
  //     } else {
  //       ques.options[i].is_selected = 0;
  //       this.objAnswer.splice(m, 1);
  //     }
  //   }

  //   console.log(this.objAnswer);
  // }

  on_option_select(
    ques: any,
    n: number,
    i: number,
    isMC: number,
    option_id: string
  ) {
    console.log(ques);
    if (this.objAnswer.length == 0) {
      let data = {
        id: n + '-' + i,
        quesid: n,
        option_id: ques.options[i].option_id,
        option_text: ques.options[i].option_text,
      };
      ques.options[i].is_selected = 1;
      this.objAnswer.push(data);
      console.log('1000');
    } else {
      if (isMC == 1) {
        const num = n + '-' + i;
        let x = this.objAnswer.findIndex((p: any) => p.id == num);
        if (x == -1) {
          let data = {
            id: n + '-' + i,
            quesid: n,
            option_id: ques.options[i].option_id,
            option_text: ques.options[i].option_text,
          };
          ques.options[i].is_selected = 1;
          this.objAnswer.push(data);
        } else {
          ques.options[i].is_selected = 0;
          this.objAnswer.splice(x, 1);
        }
      } else {
        const num = n + '-' + i;
        let y = this.objAnswer.findIndex((p: any) => p.quesid == n);
        if (y == -1) {
          console.log('1001');
          let data = {
            id: n + '-' + i,
            quesid: n,
            option_id: ques.options[i].option_id,
            option_text: ques.options[i].option_text,
          };
          ques.options[i].is_selected = 1;
          this.objAnswer.push(data);
          for (let l = 0; l < ques.options.length; l++) {
            ques.options[i].is_selected =
              ques.options[i].option_id == option_id ? 1 : 0;
          }
        } else {
          console.log('1002');
          // ques.options[i].is_selected = 0;
          for (let l = 0; l < ques.options.length; l++) {
            ques.options[l].is_selected =
              ques.options[l].option_id == option_id ? 1 : 0;
          }
          this.objAnswer[y].id = ques.options[i].id;
          this.objAnswer[y].option_id = ques.options[i].option_id;
          this.objAnswer[y].option_text = ques.options[i].option_text;
        }
      }
    }
    console.log(this.objAnswer);
  }

  create_session_id() {
    const d = new Date();
    return d.getTime();
  }

  submit_answer_for_validation(ques: any) {
    if (this.objAnswer.length == 1) {
      if (this.objAnswer[0].option_text == 'All of the above') {
        this.result = ques.answer == 'AOA' ? 'Correct' : 'Wrong';
        console.log(this.result);
      } else if (this.objAnswer[0].option_text == 'None of the above') {
        this.result = ques.answer == 'NOA' ? 'Correct' : 'Wrong';
        console.log(this.result);
      } else {
        this.result =
          ques.answer == this.objAnswer[0].option_id ? 'Correct' : 'Wrong';
        console.log(this.result);
      }
      this.checkedarray = [];
      this.objAnswer = [];
    } else {
      let ans_string = '';
      for (let i = 0; i < this.objAnswer.length; i++) {
        ans_string = ans_string + this.objAnswer[i].option_id;
      }
      console.log(ans_string);
      let str = ans_string.split('');
      let ans_string_reverse = str[1] + str[0];
      this.result =
        ques.answer === ans_string || ques.answer === ans_string_reverse
          ? 'Correct'
          : 'Wrong';
      this.objAnswer = [];
      this.checkedarray = [];
    }

    this.result == 'Correct'
      ? this.openSnackBar('Well done...your answer is correct', 'Close', {})
      : this.openSnackBar('Oops... wrong answer, try again', 'Close', {});
    if (this.result == 'Correct') {
      let now = dayjs();
      let params = {
        session_id: this.create_session_id(),
        student_id: this.arrKeyObj.student_id,
        course_id: ques.course_id,
        module_id: ques.module_id,
        assessment_type: this.arrKeyObj.assessment_type,
        question_type: this.arrKeyObj.question_type,
        has_completed: 1,
        remarks: 'Well done',
        date_time: now.format('YYYY-MM-DD') + ' ' + now.format('HH:mm:ss'),
        answer: ques.answer,
        isPassed: 1,
        question_id: ques.question_id,
        chCode: 'hg_gt78999@%^&',
        queryId: '3',
      };
      console.log(params);
      this.stateService.save_data_to_student_progress(params);
    }
  }

  save_data_to_student_progress(data: any) {
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);
        let params = {
          session_id: data.session_id,
          question_id: data.question_id,
          answer: data.answer,
          chCode: 'hg_gt78999@%^&',
          queryId: '4',
        };
        // console.log(params);
        this.save_data_to_progress_breakdown(params);
        this.update_student_progress_state();
        // console.log('Updating Student Progress State');
      }
    });
  }

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

  update_student_progress_state() {
    const sess_info = localStorage.getItem('session_ls_login');
    if (sess_info != null) {
      const data = JSON.parse(sess_info);
      this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
        if (resp.ResponseCode == '401') {
          console.log('No data...');
        } else {
          this.stateService.arrContents = resp[0];
          localStorage.setItem('session_ls', JSON.stringify(resp[0]));
          this.stateService.arrProgressAssessment1 =
            resp[0].progress_assessment1;
          this.stateService.arrProgressAssessment2 =
            resp[0].progress_assessment2;
        }
      });
    }
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  ngOnInit(): void {
    console.log('Text Component :', this.arrAssessmentTypeQUIZ);
    console.log('Student ID : ', this.arrKeyObj.student_id);
  }
}
