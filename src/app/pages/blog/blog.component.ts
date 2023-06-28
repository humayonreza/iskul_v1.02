import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  url: string = 'http://localhost/backendRTO/videos/1001.mp4';

  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
  }
}
