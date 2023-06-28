import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';
import { StateService } from 'src/app/services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  isSmart: boolean = false;
  mediaPath: string = '';
  idSelectedPanel: number = 2;
  full_name: string = '';
  arrContents: any = [
    {
      id: 1,
      title: 'Student Profile',
      icon: 'person',
      txt: 'View and update your profile',
      isSelected: 0,
    },
    {
      id: 2,
      title: 'Courses Owned',
      icon: 'local_library',
      txt: 'Courses you have purchases or started as trial',
      isSelected: 0,
    },
    {
      id: 3,
      title: 'Manage Password',
      icon: 'lock',
      txt: 'Change your password',
      isSelected: 0,
    },
    {
      id: 4,
      title: 'Logout',
      icon: 'touch_app',
      txt: 'Logout your current session',
      isSelected: 0,
    },
  ];
  arrCoursesOwned: any = [];

  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onclick_option(data: any) {
    for (let i = 0; i < this.arrContents.length; i++) {
      if (this.arrContents[i].id == data.id) {
        this.arrContents[i].isSelected = 1;
        this.idSelectedPanel = data.id;
        if (data.id == 4) {
          this.clear_session_data();
        }
        console.log(this.idSelectedPanel);
      } else {
        this.arrContents[i].isSelected = 0;
      }
    }
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

  clear_session_data() {
    localStorage.clear();
    const sess_info = localStorage.getItem('session_data');
    this.stateService.isSigned = false;
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      obj.student.courses.arrCoursesOwned = [];
      localStorage.setItem('session_data', JSON.stringify(obj));
    }
    this.router.navigate(['/account']);
  }

  access_course(data: any) {
    this.router.navigate(['/access-course'], {
      queryParams: { id: data.course_id, student_id: data.student_id },
    });
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    const sess_info = localStorage.getItem('session_data');
    if (sess_info != null) {
      let obj = JSON.parse(sess_info);
      this.stateService.isSigned = obj.login.isSigned;
      this.full_name = obj.login.userName;
      console.log('isSigned : ', this.stateService.isSigned);
      this.arrCoursesOwned = obj.student.courses.arrCoursesOwned;
      console.log('Received Data ngOnInit :', this.arrCoursesOwned);
    } else {
      this.stateService.isSigned = false;
      this.idSelectedPanel = 4;
    }
  }
}
