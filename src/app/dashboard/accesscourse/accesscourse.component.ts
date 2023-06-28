import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import autoTable from 'jspdf-autotable';
// import { jsPDF } from 'jspdf';
import { LayoutService } from 'src/app/services/layout.service';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-accesscourse',
  templateUrl: './accesscourse.component.html',
  styleUrls: ['./accesscourse.component.scss'],
})
export class AccesscourseComponent implements OnInit {
  course_id: any;
  student_id: any = '';
  next: number = 0;
  pages_by_module: number = 0;
  start_page: number = 0;
  current_page: number = 0;
  last_page: number = 0;
  question_id_by_page: number = 0;
  assessment_type_by_page: number = 0;
  question_type_by_page: number = 0;
  module_id: string = '';
  student_email: string = 'smhumayonreza@gmail.com';
  passwd: string = 'admin';
  mediaPath: string = '';
  isSmart: boolean = false;
  is_assessment1_completed: boolean = false;
  quesCategory: number = 0;
  courseTitle: string = '';
  course_full_title: string = '';
  courseGuide: string = '';
  isPaymentCompleted: boolean = false;
  tempArr: any = [];
  arrContents: any = [];
  arrNavByUser: any = [];
  arrTemplates: any = [];
  arrStudentProgress: any = [];
  progAssessment1: any = [];
  progAssessment2: any = [];
  progAssessment4: any = [];
  progAssessment3: any = [];
  arrCourseContent: any = [];
  arrQuesListbyPage: any = [];
  arrCourse: any = [];
  imgPath: string = '';
  course_intro_visible: boolean = false;
  viewMyProgress: boolean = false;
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  next_page() {
    this.viewMyProgress = false;
    console.log('question_id_by_page : ', this.question_id_by_page);
    if (this.question_id_by_page == 0) {
      this.current_page = this.current_page + 1;
      let index = this.tempArr.pages.findIndex(
        (p: any) => p.page_id == this.current_page
      );
      this.assessment_type_by_page = this.tempArr.pages[index].assessment_type;
      this.question_type_by_page = this.tempArr.pages[index].question_category;
      console.log('Question type by page :', this.question_type_by_page);
      this.question_id_by_page = this.tempArr.pages[index].question_id;
      this.fetch_template_by_page(this.module_id, this.current_page);
    } else {
      let k = this.check_current_progress_state_quiz(this.question_id_by_page);
      if (k == -1) {
        console.log('Please Complete the Quiz');
        this.openSnackBar('Please Complete the Quiz', 'Close', {});
      } else {
        this.current_page = this.current_page + 1;
        let index = this.tempArr.pages.findIndex(
          (p: any) => p.page_id == this.current_page
        );
        this.assessment_type_by_page =
          this.tempArr.pages[index].assessment_type;
        this.question_id_by_page = this.tempArr.pages[index].question_id;
        this.fetch_template_by_page(this.module_id, this.current_page);
      }
    }
  }

  prev_page() {
    this.viewMyProgress = false;
    this.current_page = this.current_page - 1;
    this.fetch_template_by_page(this.module_id, this.current_page);
    let index = this.tempArr.pages.findIndex(
      (p: any) => p.page_id == this.current_page
    );
    this.assessment_type_by_page = this.tempArr.pages[index].assessment_type;
    this.question_type_by_page = this.tempArr.pages[index].question_category;
    this.question_id_by_page = this.tempArr.pages[index].question_id;
    console.log('question type_by_page : ', this.question_type_by_page);
  }

  check_current_progress_state_quiz(question_id: number) {
    const sess_info = localStorage.getItem('session_ls');
    if (sess_info != null) {
      const data = JSON.parse(sess_info);
      console.log(data);
      let index = data.progress_assessment1.findIndex(
        (p: any) => p.question_id == question_id
      );
      return index;
    }
  }

  check_current_progress_state_module(module_id: string) {
    const sess_info = localStorage.getItem('session_ls');
    if (sess_info != null) {
      const data = JSON.parse(sess_info);
      console.log(data);
      let index = data.progress_assessment2.findIndex(
        (p: any) => p.module_id == module_id
      );
      return index;
    }
  }

  access_module(mod: any, index: number) {
    this.viewMyProgress = false;
    console.log(mod);
    this.course_intro_visible = false;
    if (index > 0) {
      console.log('arr Mod :', this.arrCourseContent[index - 1].module_id);
      console.log('progress_assessment2 :', this.progAssessment2);
      let last_module_id = this.arrCourseContent[index - 1].module_id;
      let k = this.check_current_progress_state_module(last_module_id);

      if (k == -1) {
        this.openSnackBar(
          'Please Complete module ' +
            this.arrCourseContent[index - 1].module_id,
          'Close',
          {}
        );
      } else {
        this.assessment_type_by_page = parseInt(mod.pages[0].assessment_type);
        this.question_type_by_page = parseInt(mod.pages[0].question_category);

        this.module_id = mod.module_id;
        this.pages_by_module = mod.pages.length;
        console.log('pages_by_module : ', this.pages_by_module);
        this.current_page = parseInt(mod.pages[0].page_id);
        this.start_page = parseInt(mod.pages[0].page_id);

        let str = mod.module_index.split('-');
        this.last_page = parseInt(str[1]);
        console.log('Last PageId : ', this.last_page);

        // this.last_page = parseInt(mod.pages[mod.pages.length - 1].page_id);
        // console.log('Last PageId : ', this.last_page);

        this.tempArr = mod;
        console.log('Question Type by Page : ', this.question_type_by_page);
        this.question_id_by_page = mod.pages[0].question_id;
        console.log('Current Page : ', this.start_page);
        if (this.assessment_type_by_page == 3) {
          if (this.isPaymentCompleted) {
            this.fetch_template_by_page(this.module_id, this.current_page);
          } else {
            this.openSnackBar('Please purchase the course', 'Close', {});
            this.router.navigate(['/register']);
          }
        } else {
          this.fetch_template_by_page(this.module_id, this.current_page);
        }
      }
    } else {
      this.module_id = mod.module_id;
      // mod.pages.sort((a: any, b: any) => (a.page_id > b.page_id ? 1 : -1));
      this.pages_by_module = mod.pages.length;
      this.current_page = parseInt(mod.pages[0].page_id);
      this.start_page = parseInt(mod.pages[0].page_id);

      let str = mod.module_index.split('-');
      this.last_page = parseInt(str[1]);
      console.log('Last PageId : ', this.last_page);

      // this.last_page = parseInt(mod.pages[mod.pages.length - 1].page_id);
      // console.log('Last PageId : ', this.last_page);

      this.tempArr = mod;
      this.assessment_type_by_page = parseInt(mod.pages[0].assessment_type);
      this.question_id_by_page = mod.pages[0].question_id;
      console.log('Current Page : ', this.current_page);
      this.fetch_template_by_page(this.module_id, this.current_page);
    }
  }

  fetch_template_by_page(module_id: string, current_page: number) {
    let param = {
      course_id: this.course_id,
      module_id,
      page_id: current_page,
      chCode: 'hg_gt78999@%^&',
      queryId: '15',
    };
    console.log(param);
    this.backendService.SubmitQueryStudent(param).subscribe((resp: any) => {
      if (resp == '401') {
        console.log('No data...');
      } else {
        this.arrTemplates = resp; //category
        console.log(resp);
        if (this.assessment_type_by_page == 1) {
          let index = this.progAssessment1.findIndex(
            (p: any) => p.question_id == this.question_id_by_page
          );
          if (index == -1) {
            this.arrQuesListbyPage = this.arrTemplates[0].questions;
            this.quesCategory = this.arrQuesListbyPage[0].category;
            console.log(this.arrQuesListbyPage);
          } else {
            this.arrQuesListbyPage = [];
            console.log('Already Completed');
          }
        } else if (this.assessment_type_by_page == 2) {
          let index = this.progAssessment2.findIndex(
            (p: any) => p.module_id == this.module_id
          );
          if (index == -1) {
            this.arrQuesListbyPage = this.arrTemplates[0].questions;
            console.log('Questions @AccessCourse : ', this.arrQuesListbyPage);
            // this.quesCategory = this.arrQuesListbyPage[0].category;
            console.log(this.arrQuesListbyPage);
          } else {
            this.arrQuesListbyPage = [];
            console.log('Already Completed');
          }
          // assessment_type course_id has_completed module_id question_type ser session_id student_id
        } else if (this.assessment_type_by_page == 3) {
          let index = this.progAssessment3.findIndex(
            (p: any) => p.question_type == this.question_type_by_page
          );
          console.log('I am in ', this.assessment_type_by_page);
          if (index == -1) {
            this.arrQuesListbyPage = this.arrTemplates[0].questions;
            this.quesCategory = this.arrQuesListbyPage[0].category;
            console.log(this.arrQuesListbyPage);
          } else {
            if (this.progAssessment3[index].has_completed == 0) {
              // this.get_ques_list_by_page(module_id, current_page);
              this.arrQuesListbyPage = this.arrTemplates[0].questions;
              this.quesCategory = this.arrQuesListbyPage[0].category;
              console.log(this.arrQuesListbyPage);
            } else {
              this.arrQuesListbyPage = [];
              console.log('Already Completed Assessment');
            }
          }
        }
      }
    });
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  back_to_home() {
    this.router.navigate(['/']);
  }

  count: number = 0;

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
    this.mediaPath = this.backendService.mediaPath;
    this.isSmart = screen.width < 500 ? true : false;
    this.arrContents = this.dataService.web_content;
    let arrNav = this.dataService.web_content.filter(
      (p: any) => p.page_id == 'navbar'
    );

    this.arrNavByUser = arrNav[0].contents.filter(
      (m: any) => m.user_type == this.stateService.user_type
    );

    this.route.queryParamMap.subscribe((params) => {
      this.course_id = params.get('id');
      this.student_id = params.get('student_id');

      let courses_info = this.dataService.web_content.filter(
        (p: any) => p.page_id == 'courses'
      );

      this.arrCourse = courses_info[0].contents[0].courses.filter(
        (a: any) => a.course_id == this.course_id
      );
      console.log('Course Details : ', this.arrCourse);

      this.course_intro_visible = true;

      let index = this.arrCourse.findIndex(
        (a: any) => a.course_id == this.course_id
      );

      this.course_full_title = this.arrCourse[index].title;

      const sess_info = localStorage.getItem('session_ls');
      if (sess_info != null) {
        let data = JSON.parse(sess_info);
        let k = data.course_purchased.findIndex(
          (p: any) => p.course_id == this.course_id
        );
        this.arrCourseContent = data.course_purchased[k].modules;
        console.log('Course Content : ', this.arrCourseContent);

        this.isPaymentCompleted =
          data.course_purchased[0].payment_state == 1 ? true : false;

        this.progAssessment1 = data.progress_assessment1;
        this.progAssessment2 = data.progress_assessment2;
        this.progAssessment3 = data.progress_assessment3;

        console.log('progAssessment3@ac : ', this.progAssessment3);
      }
    });
  }
}
