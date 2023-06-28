import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  mediaPath: string = '';
  src: string = '';
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
    // let params = {
    //   chCode: 'hg_gt78999@%^&',
    //   queryId: '7',
    // };
    // console.log('Student Progress: ', params);
    // this.backendService.SubmitQueryStudent(params).subscribe((resp: any) => {
    //   if (resp.ResponseCode == '401') {
    //     console.log('No data...');
    //   } else {
    //     console.log('Data : ', resp);
    //     this.src = resp[0].image_data;
    //   }
    // });
  }
}
