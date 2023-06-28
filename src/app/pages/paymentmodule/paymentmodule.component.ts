import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
declare const Stripe: any;
@Component({
  selector: 'app-paymentmodule',
  templateUrl: './paymentmodule.component.html',
  styleUrls: ['./paymentmodule.component.scss'],
})
export class PaymentmoduleComponent implements OnInit {
  mediaPath: string = '';
  isSmart: boolean = false;
  stripe: any;
  arrCoursesOwned: any = [];
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    private router: Router
  ) {}

  init_course_purchase(data: any, payState: number) {
    let now = dayjs();
    let params = {
      student_id: data.student_id,
      student_name: data.student_name,
      student_email: data.student_email,
      course_id: data.course_id,
      course_title: data.title,
      payment_state: payState,
      enrollment_date: now.format('YYYY-MM-DD'),
      completion_date: '0000-00-00',
      paid_amount: data.price_amount,
      payment_method: 0, // payment state will be default 0 unless updated by payment gateway success
      session_id: this.stateService.generate_timestamp_id(),
      quantity: 1,
      currency: 'aud',
      chCode: 'hg_gt78999@%^&',
      queryId: '9',
    };
    console.log(params);
    this.backendService.SubmitQueryStudent(params).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log(resp);
        if (payState == 1) {
          this.complete_course_purchase(params);
        } else {
          let new_course = {
            ser: '0',
            course_id: params.course_id,
            course_title: params.course_title,
            student_id: params.student_id,
            student_name: params.student_name,
            student_email: params.student_email,
            enrollment_date: params.enrollment_date,
            completion_date: params.completion_date,
            paid_amount: params.paid_amount,
            pay_sess_id: '0',
            payment_method: '1',
            payment_state: 0,
          };

          let ncData = JSON.stringify(new_course);
          let base64 = window.btoa(ncData);
          this.router.navigate(['/owned-courses'], {
            queryParams: { id: 1000, data: base64 },
          });
        }
      }
    });
  }
  // student=courses=arrCoursesOwned

  update_course_owned(data: any) {
    console.log('New Course :', data);
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null && this.stateService.arrCourses.length > 0) {
      let obj = JSON.parse(sess_info);
      this.arrCoursesOwned = obj.student.courses.arrCoursesOwned.push(data);
      localStorage.setItem('session_data', JSON.stringify(obj));
      this.stateService.isSigned = obj.login.isSigned;
    }
  }

  complete_course_purchase(data: any) {
    this.backendService.requset_stripe_session(data).subscribe((resp: any) => {
      if (resp) {
        console.log(resp);
        this.redir_to_stripe_checkout(resp.id);
      } else {
        console.log('No data...');
      }
    });
  }

  redir_to_stripe_checkout(sessionId: any) {
    this.stripe = Stripe(this.stateService.pk);
    console.log('Session Id ', sessionId);
    this.stripe.redirectToCheckout({
      sessionId: sessionId,
    });
  }

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
    this.isSmart = screen.width < 500 ? true : false;
    console.log('Course Selected :', this.stateService.objCourseSelected);
  }
}
