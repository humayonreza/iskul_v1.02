import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendService } from './backend.service';
@Injectable({
  providedIn: 'root',
})
export class StateService {
  selectedTemplateId: string = 'A';
  selectedTabId: number = 0;
  arrSavedContents: any = [];
  enable_visit_site: boolean = true;
  arrStudentProgress: any = [];
  arrContents: any = [];
  arrNav: any = [];
  arrProgressAssessment1: any = [];
  arrProgressAssessment2: any = [];
  arrValidateStudent: any = [];
  arrEditParam: any = {};
  arrCourses: any = [];
  content_id: any;
  user_type: string = 'visitor';
  isSigned: boolean = false; //flag 1000
  loggedUser: string = '';
  objCourseSelected: any = [];
  is_bullet: number = 0;
  content_data: string = '';
  isBold: boolean = false;
  module_id: string = '';
  page_id: string = '';
  content_type: string = '';
  class_name: string = '';
  template_id: string = '';
  ser: number = 0;
  cols: number = 0;
  counter: number = 0;

  isQuizCompleted: boolean = true;
  isModuleCompleted: boolean = false;

  pk: string =
    'pk_test_51LEp8lAZxxGe6ponjxOXXLeajjNYAjWe8AoakcazchdUrpao45MZrEJN6iiUxljO8i9ZsyLAmbx88ypfB1WSXYnU001ncIv1j2';
  constructor(
    private http: HttpClient,
    private backendService: BackendService
  ) {}
  // image_data question_id student_id
  get_image_data(student_id: string, question_id: string) {
    let index = this.arrValidateStudent.findIndex(
      (p: any) => p.studend_id == student_id && p.question_id == question_id
    );
    console.log(' IM Data', this.arrValidateStudent[index].image_data);
    return this.arrValidateStudent[0].image_data;
  }

  check_student_completion_state_on_assimilation(
    question_id: number,
    assessment_type: number
  ) {
    let index = this.arrStudentProgress[0].assessment_cat1.findIndex(
      (p: any) =>
        p.question_id == question_id && p.assessment_type == assessment_type
    );
    if (index == -1) {
      return 0;
    } else {
      return this.arrStudentProgress[0].assessment_cat1[index].has_completed;
    }
  }

  check_student_completion_state_on_module_assessment(
    course_id: string,
    module_id: string,
    assessment_type: number
  ) {
    let index = this.arrStudentProgress[0].assessment_cat2.findIndex(
      (p: any) =>
        p.course_id == course_id &&
        p.module_id == module_id &&
        p.assessment_type == assessment_type
    );
    if (index == -1) {
      return 0;
    } else {
      return this.arrStudentProgress[0].assessment_cat1[index].has_completed;
    }
    // console.log(course_id + ' ' + module_id + ' ' + assessment_type);
  }

  generate_timestamp_id() {
    const d = new Date();
    return d.getTime();
  }

  get_session_data() {
    const sess_info = localStorage.getItem('session_ls');
    if (sess_info != null) {
      return JSON.parse(sess_info);
    }
  }

  // ===========================  Student Progress ======================
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
          isPassed: data.isPassed,
          chCode: 'hg_gt78999@%^&',
          queryId: '4',
        };
        // console.log(params);
        this.save_data_to_progress_breakdown(params);
        let progState = {
          assessment_type: data.assessment_type,
          course_id: data.course_id,
          has_completed: 1,
          module_id: data.module_id,
          question_id: data.question_id,
          session_id: data.session_id,
        };
        this.update_student_progress_state(progState);
        // console.log('Updating Student Progress State');
      }
    });
  }

  save_data_to_student_progress2(data: any, arrAssessmentResult: any) {
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);
        for (let i = 0; i < arrAssessmentResult.length; i++) {
          let params = {
            session_id: data.session_id,
            question_id: arrAssessmentResult[i].question_id,
            answer: arrAssessmentResult[i].answer,
            isPassed: 1,
            chCode: 'hg_gt78999@%^&',
            queryId: '4',
          };
          console.log(params);
          this.save_data_to_progress_breakdown(params);
          this.counter++;
        }

        // if (this.counter == arrAssessmentResult.length) {
        let progState = {
          assessment_type: data.assessment_type,
          course_id: data.course_id,
          has_completed: data.has_completed,
          module_id: data.module_id,
          question_id: data.question_id,
          session_id: data.session_id,
        };
        this.update_student_progress_state(progState);
        // }
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

  update_student_progress_state(state: any) {
    const sess_info = localStorage.getItem('session_ls');
    if (sess_info != null) {
      const data = JSON.parse(sess_info);
      console.log('StateService Params PS : ', state);
      if (state.assessment_type == 1) {
        data.progress_assessment1.push(state);
        console.log('StateService PS : ', data);
        localStorage.removeItem('session_ls');
        localStorage.setItem('session_ls', JSON.stringify(data));
      } else if (state.assessment_type == 2) {
        data.progress_assessment2.push(state);
        localStorage.removeItem('session_ls');
        localStorage.setItem('session_ls', JSON.stringify(data));
        console.log(data.progress_assessment2);
      }
      // this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      //   if (resp.ResponseCode == '401') {
      //     console.log('No data...');
      //   } else {
      //     // this.stateService.arrContents = resp[0];
      //     // localStorage.setItem('session_ls', JSON.stringify(resp[0]));
      //     // this.stateService.arrProgressAssessment1 =
      //     //   resp[0].progress_assessment1;
      //     // this.stateService.arrProgressAssessment2 =
      //     //   resp[0].progress_assessment2;
      //   }
      // });
    }
  }
  // ====================================================================
}
