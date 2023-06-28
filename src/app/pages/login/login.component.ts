import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() arrNav: any = [];
  mediaPath: string = '';
  student_email: string = 'hasan@gmail.com';
  passwd: string = '888999';
  arrCourseOwned: any = [];
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService,
    private router: Router
  ) {}

  login(payload: any) {
    const data = {
      student_email: payload.student_email,
      passwd: payload.passwd,
      chCode: 'hg_gt78999@%^&',
      queryId: '1',
    };
    console.log(data);
    this.backendService.SubmitQueryStudent(data).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log(resp);
        let state = {
          login: {
            userEmail: payload.student_email,
            userName: resp[0].first_name + ' ' + resp[0].last_name,
            passwd: payload.passwd,
            isSigned: true,
          },
          student: {
            student_id: resp[0].student_id,
            student_contact: resp[0].student_contact,
            registration_date: resp[0].registration_date,
            usi: resp[0].usi,
            courses: {
              arrCoursesOwned: resp[0].course_purchased,
              progress: {
                arrProgressAssessment1: resp[0].progress_assessment1,
                arrProgressAssessment2: resp[0].progress_assessment2,
                arrProgressAssessment3: resp[0].progress_assessment3,
              },
            },
          },
        };
        console.log('Session @login:', state);
        localStorage.clear();
        localStorage.setItem('session_data', JSON.stringify(state));
        this.stateService.isSigned = true;
        this.router.navigate(['/']);
      }
    });
  }

  signup_now() {
    this.router.navigate(['/signup-student']);
  }

  ngOnInit(): void {
    const sess_info = localStorage.getItem('session_data');
    this.mediaPath = this.backendService.mediaPath;
    if (sess_info != null) {
      this.stateService.isSigned = true;
      this.student_email = JSON.parse(sess_info).login.userEmail;
      this.passwd = JSON.parse(sess_info).login.passwd;
    }
  }
}
