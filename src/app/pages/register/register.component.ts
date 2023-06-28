import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare const Stripe: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSmart: boolean = false;
  mediaPath: string = '';
  student_id: number = 0;
  first_name: string = '';
  last_name: string = '';
  student_email: string = '';
  usi: string = '';
  top_edu_level: number = 0;

  isAtSchool: number = 0;
  curr_emp_code: number = 0;

  isFirstNation: number = 0;
  isOtherLang: number = 0;
  disabilityCode: number = 0;

  student_contact: string = '';
  birth_date: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  isLinear: boolean = false;
  arrCoursesOwn: any = [];
  passwd: string = '';
  stripe: any;
  elm: any;
  fileName: string = '';
  fileExt: string = '';
  docExtId: number = 0;
  uploadFile: string = '';

  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService,
    private router: Router,
    private http: HttpClient
  ) {}

  student_registration(payload: any) {
    let now = dayjs();
    let data = {
      first_name: payload.first_name,
      last_name: payload.last_name,
      student_email: payload.student_email,
      student_contact: payload.student_contact,
      birth_date: payload.birth_date,
      registration_date: now.format('YYYY-MM-DD'),
      usi: payload.usi,
      is_active: 1,
      chCode: 'hg_gt78999@%^&',
      queryId: '8',
    };
    console.log('data : ', data);
    if (data.first_name != '' || data.student_email != '') {
      this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
        if (resp.ResponseCode == '401') {
          console.log('No data...');
        } else {
          console.log(resp);
          this.router.navigate(['/login']);
        }
      });
    } else {
      console.log('Email and First Name cannot be empty');
    }
  }

  student_education_employment(payload: any) {
    console.log(payload);
    let data = {
      student_id: this.student_id,
      top_edu_level: payload.top_edu_level,
      isAtSchool: payload.isAtSchool,
      curr_emp_code: payload.curr_emp_code,
      chCode: 'hg_gt78999@%^&',
      queryId: '11',
    };
    console.log('data : ', data);
    if (payload.top_edu_level != 0 || payload.isAtSchool != 0) {
      this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
        if (resp.ResponseCode == '401') {
          console.log('No data...');
        } else {
          console.log(resp);
        }
      });
    } else {
      console.log('Mandatory info empty');
    }
  }

  student_diversity_health(payload: any) {
    console.log(payload);
    let data = {
      student_id: this.student_id,
      isFirstNation: payload.isFirstNation,
      isOtherLang: payload.isOtherLang,
      disabilityCode: payload.disabilityCode,
      chCode: 'hg_gt78999@%^&',
      queryId: '12',
    };
    console.log('data : ', data);
    if (payload.top_edu_level != 0 || payload.isAtSchool != 0) {
      this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
        if (resp.ResponseCode == '401') {
          console.log('No data...');
        } else {
          console.log(resp);
          this.router.navigate(['/login']);
        }
      });
    } else {
      console.log('Mandatory info empty');
    }
  }

  onFileSelected(event: any) {
    this.elm = event.target;
    console.log(this.elm.files[0]);
    this.fileName = this.elm.files[0].name;
    this.uploadFile = this.elm.files[0].name;
    if (this.elm.files.length > 0) {
      if (this.elm.files[0].type === 'image/jpeg') {
        this.fileExt = '.jpg';
        this.docExtId = 1;
      } else if (this.elm.files[0].type === 'image/png') {
        this.fileExt = '.png';
        this.docExtId = 2;
      } else if (this.elm.files[0].type === 'application/pdf') {
        this.fileExt = '.pdf';
        this.docExtId = 3;
      } else if (this.elm.files[0].type === 'audio/wav') {
        this.fileExt = '.wav';
        this.docExtId = 4;
      } else {
        this.fileExt = '.docx';
        this.docExtId = 5;
      }
    }
    console.log('File Type :', this.docExtId);
  }

  upload_validation_image() {
    let imgData = new FormData();
    let imgContent = this.student_id + '-' + this.docExtId + '-' + 'photo_id';
    imgData.append('file', this.elm.files[0], imgContent);
    console.log('File Name @bes: ', imgContent);
    this.http
      .post(
        this.backendService.mediaPath +
          'images/courses/validation_docs/media_upload.php',
        imgData
      )
      .subscribe((resp) => {
        if (resp) {
          console.log('Upload Successful...');
        } else {
          console.log('Upload Successful.');
        }
      });
  }

  init_course_purchase(data: any, isTrial: boolean) {
    let now = dayjs();
    console.log(data);
    let params = {
      student_id: this.student_id,
      course_id: data.course_id,
      payment_state: 0,
      enrollment_date: now.format('YYYY-MM-DD'),
      completion_date: '0000-00-00',
      paid_amount: data.price_amount,
      payment_method: 1,
      pay_sess_id: this.stateService.generate_timestamp_id(),
      chCode: 'hg_gt78999@%^&',
      queryId: '9',
    };
    console.log(params);
    this.backendService.SubmitQueryStudent(params).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log(resp);
        if (isTrial == false) {
          const dx = {
            student_id: params.student_id,
            first_name: this.first_name,
            last_name: this.last_name,
            student_email: this.student_email,
            quantity: 1,
            course_id: data.course_id,
            paid_amount: data.price_amount,
            session_id: params.pay_sess_id,
            currency: 'aud',
            chCode: 'hg_gt78999@%^&',
          };
          this.complete_course_purchase(dx);
        } else {
          console.log('Enrolled Free :', resp);
          let dx = {
            student_id: this.student_id,
            course_id: data.course_id,
            payment_state: 0,
            paid_amount: params.paid_amount,
            enrollment_date: params.enrollment_date,
            completion_date: params.completion_date,
            payment_method: params.payment_method,
            pay_sess_id: params.pay_sess_id,
          };
          this.arrCoursesOwn.push(dx);
          const sess_info = localStorage.getItem('session_ls');
          if (sess_info != null) {
            let sess = JSON.parse(sess_info);
            sess.course_purchased = this.arrCoursesOwn;
            localStorage.setItem('session_ls', JSON.stringify(sess));
          }
          this.refresh_session_by_student_id();
        }
      }
    });
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

  isPayButtonDisabled: boolean = false;

  upgrade_course_purchase(data: any) {
    this.isPayButtonDisabled = true;
    console.log('CCP:', data);
    const params = {
      student_id: data.student_id,
      first_name: this.first_name,
      last_name: this.last_name,
      student_email: this.student_email,
      quantity: 1,
      course_id: data.course_id,
      paid_amount: data.paid_amount,
      session_id: data.pay_sess_id,
      currency: 'aud',
      chCode: 'hg_gt78999@%^&',
    };
    console.log(params);
    this.backendService
      .requset_stripe_session(params)
      .subscribe((resp: any) => {
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

  access_course(data: any) {
    this.router.navigate(['/access-course'], {
      queryParams: { id: data.course_id, student_id: data.student_id },
    });
  }

  refresh_session_by_student_id() {
    this.stateService.arrContents = [];
    const data = {
      student_email: this.student_email,
      passwd: this.passwd,
      chCode: 'hg_gt78999@%^&',
      queryId: '1',
    };
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        this.stateService.isSigned = true; //flag 1000
        this.stateService.arrContents = resp[0];
        localStorage.setItem('session_ls', JSON.stringify(resp[0]));
        localStorage.setItem('session_ls_login', JSON.stringify(data));
        this.stateService.arrProgressAssessment1 = resp[0].progress_assessment1;
        this.stateService.arrProgressAssessment2 = resp[0].progress_assessment2;
        console.log('logged student Data @state: ', resp);
        for (let i = 0; i < this.arrNavByUser[0].links.length; i++) {
          this.arrNavByUser[0].links[i].isActive =
            this.arrNavByUser[0].links[i].route == '/account' ? 1 : 0;
        }
        this.router.navigate(['/account']);
      }
    });
  }

  buy_try_course() {
    this.router.navigate(['/courses']);
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.arrContents = this.dataService.web_content;
    let arrNav = this.dataService.web_content.filter(
      (p: any) => p.page_id == 'navbar'
    );
    this.arrNavByUser = arrNav[0].contents.filter(
      (m: any) => m.user_type == this.stateService.user_type
    );
    const sess_info = localStorage.getItem('session_ls');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      this.first_name = obj.first_name;
      this.last_name = obj.last_name;
      this.student_email = obj.student_email;
      this.student_contact = obj.student_contact;
      this.birth_date = obj.birth_date;
      this.passwd = obj.passwd;
      this.usi = obj.usi;
      this.student_id = obj.student_id;

      for (let i = 0; i < obj.course_purchased.length; i++) {
        let data = {
          student_id: obj.course_purchased[i].student_id,
          course_id: obj.course_purchased[i].course_id,
          payment_state: obj.course_purchased[i].payment_state,
          paid_amount: obj.course_purchased[i].paid_amount,
          enrollment_date: obj.course_purchased[i].enrollment_date,
          completion_date: obj.course_purchased[i].completion_date,
          payment_method: obj.course_purchased[i].payment_method,
          pay_sess_id: obj.course_purchased[i].pay_sess_id,
        };
        this.arrCoursesOwn.push(data);
      }
    }
  }
}
