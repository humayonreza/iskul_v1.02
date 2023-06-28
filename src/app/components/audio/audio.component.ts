import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  selected_question_id: number = 0;
  isSubmitted: boolean = false;
  student_id: number = 0;
  // url: string = 'http://localhost/backendRTO/videos/1001.mp4';
  @Input() arrAssessmentTypeVA: any = [];
  @Input() arrKeyObj: any = {};
  current_verbal_assessment: number = 0;

  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService
  ) {}

  start_va_by_question(question_id: number) {
    this.selected_question_id = question_id;
    for (let k = 0; k < this.arrAssessmentTypeVA.length; k++) {
      if (this.arrAssessmentTypeVA[k].question_id == question_id) {
        this.arrAssessmentTypeVA[k].is_correct = 1;
      }
    }
  }

  // ser: '678';
  // session_id: '1687737129783';
  // student_id: '100001';
  // course_id: 'RSA';
  // module_id: 'RSA1003';
  // assessment_type: '3';
  // question_type: '1';
  // has_completed: '1';

  process_answer_for_assessment() {
    let progState = {
      ser: '0',
      session_id: '1686131937654', //data.session_id,
      student_id: this.arrKeyObj.student_id,
      course_id: this.arrKeyObj.course_id,
      module_id: this.arrKeyObj.module_id,
      assessment_type: this.arrKeyObj.assessment_type,
      question_type: this.arrKeyObj.question_type,
      has_completed: 2,
    };
    this.isSubmitted = true;
    this.update_student_progress_state(progState);
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
  //       console.log('progress_assessment3@VA :', data.progress_assessment3);
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;

    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let data = JSON.parse(sess_info);
      console.log('Progress : ', data.student.courses.progress);
      let index =
        data.student.courses.progress.arrProgressAssessment3.findIndex(
          (p: any) =>
            p.question_type == this.arrKeyObj.question_type &&
            p.has_completed == 1
        );

      if (index == -1) {
        this.isSubmitted = false;
        this.student_id = this.arrKeyObj.student_id;
        // console.log('Ques List  :', this.arrAssessmentTypeVA);
        // console.log('Student ID : ', this.arrKeyObj.student_id);
        // for (let k = 0; k < this.arrAssessmentTypeVA.length; k++) {
        //   this.arrAssessmentTypeVA[k].answer = '';
        // }
      } else {
        this.isSubmitted = true;
        console.log('Already Completed...');
      }
    }
    // const sess_info = localStorage.getItem('session_data');
    // if (sess_info != null) {
    //   let data = JSON.parse(sess_info);
    //   let index = data.progress_assessment3.findIndex(
    //     (p: any) =>
    //       p.question_type == this.arrKeyObj.question_type &&
    //       p.has_completed == 1
    //   );
    //   if (index == -1) {
    //     this.isSubmitted = false;

    //     this.student_id = this.arrKeyObj.student_id;
    //     console.log('Ques List  :', this.arrAssessmentTypeVA);
    //     console.log('Student ID : ', this.arrKeyObj.student_id);
    //     for (let k = 0; k < this.arrAssessmentTypeVA.length; k++) {
    //       this.arrAssessmentTypeVA[k].answer = '';
    //     }
    //   } else {
    //     this.isSubmitted = true;
    //     console.log('Already Completed...');
    //   }
    // }
  }
}
