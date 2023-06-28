import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ContentService } from 'src/app/services/content.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  arrContents: any = [];
  mediaPath: string = '';
  sliderCat1: string = 'slider';
  sliderCat2: string = 'review';
  constructor(
    private contentService: ContentService,
    private backendService: BackendService,
    public stateService: StateService
  ) {}
  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
    this.arrContents = this.contentService.web_content.filter(
      (p: any) => p.page_id == 'footer'
    )[0].data;
    console.log('Footer :', this.arrContents);
  }
}
