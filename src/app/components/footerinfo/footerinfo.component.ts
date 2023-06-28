import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footerinfo',
  templateUrl: './footerinfo.component.html',
  styleUrls: ['./footerinfo.component.scss'],
})
export class FooterinfoComponent implements OnInit {
  mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  isSmart: boolean = false;
  arrGuidelines: any = [];
  @Input() course_id: string = '';
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.mediaPath = this.backendService.mediaPath;
    // this.arrContents = this.dataService.web_content;

    let arrNav = this.dataService.web_content.filter(
      (p: any) => p.page_id == 'navbar'
    );

    this.arrContents = this.dataService.web_content.filter(
      (p: any) => p.page_id == 'courses'
    )[0].contents[0].courses;

    this.arrGuidelines = this.arrContents.filter(
      (p: any) => p.course_id == this.course_id
    )[0].guidelines;

    console.log(this.arrGuidelines);

    this.arrNavByUser = arrNav[0].contents.filter(
      (m: any) => m.user_type == this.stateService.user_type
    );
  }
}
