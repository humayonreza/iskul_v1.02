import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentService } from 'src/app/services/content.service';
declare const Stripe: any;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  mediaPath: string = '';
  arrContents: any = [];
  arrCoursesOwned: any = [];

  selectedSer: number = 0;
  isPayDisabled: boolean = false;
  student_email: string = '';
  student_contact: string = '';
  usi: string = '';
  stripe: any;
  student_id: number = 0;
  student_name: string = '';
  showForm: boolean = false;
  isSmart: boolean = false;

  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public contentService: ContentService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  start_course_owning_process(
    course_id: string,
    price_amount: number,
    title: string
  ) {
    let payload = {
      student_id: this.student_id,
      student_name: this.student_name,
      student_email: this.student_email,
      course_id,
      price_amount,
      title,
    };

    if (this.stateService.isSigned) {
      this.stateService.objCourseSelected = [];
      this.stateService.objCourseSelected.push(payload);
      this.router.navigate(['/payment-module']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  process_registration(data: any) {
    console.log('account', data);
  }

  process_course_enrollment(data: any) {
    console.log('enroll');
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  req_for_signin() {
    this.openSnackBar('Please login as accounted user', 'Close', {});
  }

  highlight_owned_courses(course_id: string) {
    let index = this.stateService.arrCourses.findIndex(
      (p: any) => p.courseId == course_id
    );
    console.log(course_id);
    console.log(index);
    this.stateService.arrCourses[index].isSelected = 1;
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'courses'
    )[0].data;
    console.log('Courses :', this.arrContents);
    this.stateService.arrCourses = this.arrContents[0].contents;
    console.log('State Courses :', this.stateService.arrCourses);
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null && this.stateService.arrCourses.length > 0) {
      let obj = JSON.parse(sess_info);
      this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
      this.stateService.isSigned = obj.login.isSigned;
      this.student_id = obj.student.student_id;
      this.student_name = obj.login.userName;
      this.student_email = obj.login.userEmail;
      if (this.stateService.arrCourses.length > 0) {
        for (let i = 0; i < this.arrCoursesOwned.length; i++) {
          obj.login.isSigned
            ? this.highlight_owned_courses(this.arrCoursesOwned[i].course_id)
            : this.highlight_owned_courses('NA');
          console.log('Courses Owned : ', this.arrCoursesOwned[i].course_id);
        }
      }
      console.log('Arr Cources : ', this.stateService.arrCourses);
    } else {
      console.log('Session is empty');
    }
  }
}
