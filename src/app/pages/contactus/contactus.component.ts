import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  mediaPath: string = '';
  // mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  isSmart: boolean = false;
  bannerImg: string = '';

  student_name: string = '';
  student_email: string = '';
  student_id: number = 0;
  grade_given: number = 0;
  remarks: string = '';
  msg_title: string = '';
  msg_body: string = '';

  arrRating: any = [
    {
      value: 1,
      title: 'Poor',
      icon: 'filter_1',
      isActive: 0,
    },
    {
      value: 2,
      title: 'Fair',
      icon: 'filter_2',
      isActive: 0,
    },
    {
      value: 3,
      title: 'Good',
      icon: 'filter_3',
      isActive: 0,
    },
    {
      value: 4,
      title: 'Very good',
      icon: 'filter_4',
      isActive: 0,
    },
    {
      value: 5,
      title: 'Excellent',
      icon: 'filter_5',
      isActive: 0,
    },
  ];

  isSigned: boolean = false;

  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public contentService: ContentService
  ) {}

  on_review_rate_change(val: number) {
    this.grade_given = val;
    for (let i = 0; i < this.arrRating.length; i++) {
      this.arrRating[i].isActive = this.arrRating[i].value == val ? 1 : 0;
    }
    console.log(this.arrRating);
  }

  submit_review(data: any) {
    console.log(data);
    console.log('Student Progress');
    let param = {
      student_id: this.student_id,
      chCode: 'hg_gt78999@%^&',
      queryId: '19',
    };
    console.log(param);
    this.backendService.SubmitQueryStudent(param).subscribe((resp: any) => {
      if (resp == '401') {
        console.log('No data...');
      } else {
        console.log('Progress : ', resp);
      }
    });
  }

  submit_query(data: any) {
    console.log(data);
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.isSigned = this.stateService.isSigned;
    this.bannerImg =
      screen.width < 500 ? 'contactusSmart.png' : 'contactusBig.png';
    // this.bannerImg = screen.width < 500 ? 'contactus.png' : 'contactus.png';

    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'contact'
    )[0].data;
    console.log('Contact us :', this.arrContents);
  }
}
