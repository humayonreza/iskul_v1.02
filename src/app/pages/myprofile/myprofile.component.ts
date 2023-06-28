import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import * as dayjs from 'dayjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
declare const Stripe: any;

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
})
export class MyprofileComponent implements OnInit {
  isSmart: boolean = false;
  mediaPath: string = '';
  arrContents: any = [];
  arrCoursesOwned: any = [];
  newCourse: any = [];
  senderId: any;
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  update_course_owned(data: any, senderId: number) {
    console.log('Sender Id :', senderId);
    console.log('New Course :', data);
    console.log('Student Id :', data.student_id);
    console.log('Course Id:', data.course_id);
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      // 1000 = Try the course
      // 2000 = purchase the course
      if (senderId == 1000) {
        let index = obj.student.courses.arrCoursesOwned.findIndex(
          (p: any) =>
            p.student_id == data.student_id && p.course_id == data.course_id
        );
        if (index == -1) {
          let new_course = {
            ser: '0',
            course_id: data.course_id,
            course_title: data.course_title,
            student_id: data.student_id,
            student_name: data.student_name,
            student_email: data.student_email,
            enrollment_date: data.enrollment_date,
            completion_date: data.completion_date,
            paid_amount: data.paid_amount,
            pay_sess_id: 'NA',
            payment_method: '1',
            payment_state: data.payment_state,
          };
          obj.student.courses.arrCoursesOwned.push(new_course);
          localStorage.setItem('session_data', JSON.stringify(obj));
          this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
        } else {
          this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
        }
      } else {
        let index = obj.student.courses.arrCoursesOwned.findIndex(
          (p: any) =>
            p.student_id == data.student_id && p.course_id == data.course_id
        );
        if (index == -1) {
          let new_course = {
            ser: '0',
            course_id: data.course_id,
            course_title: data.course_title,
            student_id: data.student_id,
            student_name: data.student_name,
            student_email: data.student_email,
            enrollment_date: data.enrollment_date,
            completion_date: data.completion_date,
            paid_amount: data.paid_amount,
            pay_sess_id: '0',
            payment_method: '1',
            payment_state: data.payment_state,
          };
          obj.student.courses.arrCoursesOwned.push(new_course);
          localStorage.setItem('session_data', JSON.stringify(obj));
          this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
        } else {
          obj.student.courses.arrCoursesOwned[index].payment_state = 1;
          localStorage.setItem('session_data', JSON.stringify(obj));
          this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
        }
      }
      console.log('Updated Session', obj);
      console.log('Updated Courses Array', this.arrCoursesOwned);
    }
  }

  access_course(data: any) {
    this.router.navigate(['/access-course'], {
      queryParams: { id: data.course_id, student_id: data.student_id },
    });
  }

  pay_now(data: any) {
    console.log(data);
    let payload = {
      student_id: data.student_id,
      student_name: data.student_name,
      student_email: data.student_email,
      course_id: data.course_id,
      price_amount: data.paid_amount,
      title: data.course_title,
    };

    if (this.stateService.isSigned) {
      this.stateService.objCourseSelected = [];
      this.stateService.objCourseSelected.push(payload);
      this.router.navigate(['/payment-module']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;

    this.route.queryParamMap.subscribe((params) => {
      this.senderId = params.get('id');
      console.log('Sender Id :', this.senderId);
      this.newCourse = params.get('data');
      let dxAtob = window.atob(this.newCourse);
      let data = JSON.parse(dxAtob);
      if (this.senderId == '1000') {
        if (data) {
          this.update_course_owned(data, this.senderId);
          console.log('Sender Id :', this.senderId);
          console.log('Received Data :', data);
        }
      } else if (this.senderId == '2000') {
        if (data[0]) {
          this.update_course_owned(data[0], this.senderId);
          console.log('Sender Id :', this.senderId);
          console.log('Received Data :', data[0]);
        }
      } else {
        const sess_info = localStorage.getItem('session_data');
        if (sess_info != null) {
          let obj = JSON.parse(sess_info);
          this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
          console.log('Received Data ngOnInit :', this.arrCoursesOwned);
        }
      }
    });
  }
}
