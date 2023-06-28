import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';
import { StateService } from 'src/app/services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-coursematerials',
  templateUrl: './coursematerials.component.html',
  styleUrls: ['./coursematerials.component.scss'],
})
export class CoursematerialsComponent implements OnInit {
  isSmart: boolean = false;
  start_page: number = 0;
  current_page: number = 0;
  last_page: number = 0;
  mediaPath: string = '';
  course_id: any;
  module_id: string = '';
  student_id: any;
  arrModules: any = [];
  arrContents: any = [];
  arrContentsByPageId: any = [];
  arrModuleContent: any = [];
  arrQuesListbyPage: any = [];
  isVisCourseDesc: boolean = true;
  assessment_type_by_page: number = 0;
  question_id_by_page: number = 0;
  quesCategory: number = 0;
  question_category: number = 0;
  arrProgressState: any = [];
  isQuizCompleted: boolean = false;
  viewMyProgress: boolean = false;
  arrStudentProgress: any = [];
  arrCourseSelected: any = [];
  course_title: string = '';
  imgId: string = '';
  count: number = 0;
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  access_module(module_id: string, i: number) {
    this.isVisCourseDesc = false;
    this.viewMyProgress = false;
    this.module_id = module_id;
    if (i == 0) {
      this.fetch_page_contents_by_module_id(module_id);
    } else {
      let moduleId = this.arrModules[i - 1].module_id;
      console.log('Prev Module ID : ', moduleId);
      let isPrevModuleCompleted =
        this.check_immediate_previous_module_is_completed(moduleId);
      if (isPrevModuleCompleted == true) {
        console.log('Module already completed');
        this.fetch_page_contents_by_module_id(module_id);
      } else {
        console.log('Prev Module not completed');
      }
    }
  }

  check_immediate_previous_module_is_completed(module_id: string) {
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      let arrModuleState = obj.student.courses.progress.arrProgressAssessment2;
      console.log('Progress : ', arrModuleState);
      const index = arrModuleState.findIndex(
        (p: any) => p.module_id == module_id && p.has_completed == 1
      );
      if (index == -1) {
        return false;
      } else {
        return true;
      }
    }
  }

  on_page_change(inc: number) {
    this.current_page = this.current_page + inc;
    console.log(this.current_page);
    this.stateService.isQuizCompleted = true;
    this.arrQuesListbyPage = [];
    let index = this.arrContents.findIndex(
      (p: any) => p.page_id == this.current_page
    );
    this.arrContentsByPageId = this.arrContents[index].content;

    if (this.arrContents[index].assessment_type == 1) {
      if (this.arrContents[index].question_id != 0) {
        this.question_id_by_page = this.arrContents[index].question_id;
        let check = this.check_quiz_is_completed(
          this.arrContents[index].module_id,
          this.arrContents[index].assessment_type,
          this.arrContents[index].question_id
        );
        if (check == -1) {
          console.log('Quiz not completed');
          this.stateService.isQuizCompleted = false;
          this.assessment_type_by_page = 1;
          this.arrQuesListbyPage = this.arrContents[index].questions;
        } else {
          console.log('Quiz completed');
        }
      }
    } else if (this.arrContents[index].assessment_type == 2) {
      this.arrQuesListbyPage = [];
      let check = this.check_assessment2_is_completed(
        this.arrContents[index].module_id,
        this.arrContents[index].assessment_type
      );
      if (check == -1) {
        console.log('Assessment not completed');
        this.assessment_type_by_page = 2;
        this.arrQuesListbyPage = this.arrContents[index].questions;
      } else {
        console.log('Assessment completed');
      }
    } else if (this.arrContents[index].assessment_type == 3) {
      this.assessment_type_by_page = 3;
      this.quesCategory = this.arrContents[index].question_category;
      const check = this.check_final_assessment_is_completed(
        this.arrContents[index].module_id,
        this.arrContents[index].assessment_type,
        this.arrContents[index].question_category
      );
      if (check == -1) {
        console.log('Quiz not completed');
        this.stateService.isQuizCompleted = false;
        this.arrQuesListbyPage = this.arrContents[index].questions;
      } else {
        console.log('Quiz completed');
        this.arrQuesListbyPage = [];
      }
    }
  }

  check_final_assessment_is_completed(
    module_id: string,
    assessment_type: number,
    question_type: number
  ) {
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      let arrAssessment = obj.student.courses.progress.arrProgressAssessment3;
      const index = arrAssessment.findIndex(
        (p: any) =>
          p.module_id == module_id &&
          p.assessment_type == assessment_type &&
          p.question_type == question_type
      );
      return index;
    }
  }

  check_assessment2_is_completed(module_id: string, assessment_type: number) {
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      let arrAssessment = obj.student.courses.progress.arrProgressAssessment2;
      const index = arrAssessment.findIndex(
        (p: any) =>
          p.module_id == module_id && p.assessment_type == assessment_type
      );
      return index;
    }
  }

  check_quiz_is_completed(
    module_id: string,
    assessment_type: number,
    question_id: number
  ) {
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      let arrAssessment = obj.student.courses.progress.arrProgressAssessment1;
      console.log('arrProgressAssessment1', arrAssessment);
      const index = arrAssessment.findIndex(
        (p: any) =>
          p.module_id == module_id &&
          p.assessment_type == assessment_type &&
          p.question_id == question_id
      );
      return index;
    }
  }

  fetch_page_contents_by_module_id(module_id: string) {
    console.log(module_id);
    let param = {
      course_id: this.course_id,
      module_id: module_id,
      chCode: 'hg_gt78999@%^&',
      queryId: '21',
    };
    console.log(param);
    this.arrContents = [];
    this.arrContentsByPageId = [];
    this.backendService.SubmitQueryStudent(param).subscribe((resp: any) => {
      if (resp == '401') {
        console.log('No data...');
      } else {
        this.arrContents = resp;
        this.arrQuesListbyPage = [];
        this.current_page = parseInt(this.arrContents[0].page_id);
        this.start_page = parseInt(this.arrContents[0].page_id);
        this.last_page = this.current_page + this.arrContents.length - 1;
        this.arrContentsByPageId = this.arrContents[0].content;
        if (this.arrContents[0].assessment_type == 1) {
          this.arrQuesListbyPage = [];
          if (this.arrContents[0].question_id != 0) {
            let check = this.check_quiz_is_completed(
              this.arrContents[0].module_id,
              this.arrContents[0].assessment_type,
              this.arrContents[0].question_id
            );
            if (check == -1) {
              console.log('Quiz not completed');
              this.assessment_type_by_page = 1;
              this.arrQuesListbyPage = this.arrContents[0].questions;
            } else {
              console.log('Quiz completed');
            }
          }
        } else if (this.arrContents[0].assessment_type == 2) {
          this.arrQuesListbyPage = [];
          let check = this.check_assessment2_is_completed(
            this.arrContents[0].module_id,
            this.arrContents[0].assessment_type
          );
          if (check == -1) {
            console.log('Assessment not completed');
            this.assessment_type_by_page = 2;
            this.arrQuesListbyPage = this.arrContents[0].questions;
          } else {
            console.log('Assessment completed');
          }
        } else if (this.arrContents[0].assessment_type == 3) {
          this.assessment_type_by_page = 3;
          this.quesCategory = this.arrContents[0].question_category;
          const check = this.check_final_assessment_is_completed(
            this.arrContents[0].module_id,
            this.arrContents[0].assessment_type,
            this.arrContents[0].question_category
          );
          if (check == -1) {
            console.log('Quiz not completed');
            this.stateService.isQuizCompleted = false;
            this.arrQuesListbyPage = this.arrContents[0].questions;
          } else {
            console.log('Quiz completed');
            this.arrQuesListbyPage = [];
          }
        }
      }
    });
  }

  get_module_list_by_course_id(course_id: string) {
    let param = {
      course_id,
      chCode: 'hg_gt78999@%^&',
      queryId: '20',
    };
    console.log(param);
    this.backendService.SubmitQueryStudent(param).subscribe((resp: any) => {
      if (resp == '401') {
        console.log('No data...');
      } else {
        console.log('Module List : ', resp);
        this.arrModules = resp;
      }
    });
  }

  view_progress_by_student() {
    this.viewMyProgress = true;
    let param = {
      course_id: this.course_id,
      student_id: this.student_id,
      chCode: 'hg_gt78999@%^&',
      queryId: '14',
    };
    console.log(param);
    this.backendService.SubmitQueryStudent(param).subscribe((resp: any) => {
      if (resp == '401') {
        console.log('No data...');
      } else {
        console.log('Progress : ', resp);
        this.arrStudentProgress = resp;

        for (let i = 0; i < resp.length; i++) {
          if (resp[i].assessment_type == 3 && resp[i].isGarbage == 0) {
            if (resp[i].has_completed != 1) {
              this.count++;
            }
          }
        }
        if (this.count == 0) {
          console.log('Issue Certificate', this.count);
          this.authorize_certificate(this.student_id, this.course_id);
        }
      }
    });
  }

  authorize_certificate(student_id: number, course_id: string) {
    console.log();
    let data = {
      course_id,
      student_id,
      chCode: 'hg_gt78999@%^&',
      queryId: '19',
    };
    console.log(data);
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Completion : ', resp);
      }
    });
  }

  downloadCertificate() {
    this.router.navigate(['/download'], {
      queryParams: { id: this.course_id, student_id: this.student_id },
    });
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;

    this.route.queryParamMap.subscribe((params) => {
      this.course_id = params.get('id');
      this.student_id = params.get('student_id');
      this.get_module_list_by_course_id(this.course_id);
      let data = this.contentService.web_content.filter(
        (p: any) => p.page_id == 'courses'
      )[0].data[0].contents;

      this.arrCourseSelected = data.filter(
        (p: any) => p.courseId == this.course_id
      )[0].desc;
      this.course_title = this.arrCourseSelected[0].title;
      console.log(this.arrCourseSelected);
    });
  }
}
