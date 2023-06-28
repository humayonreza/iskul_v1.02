import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  content_id: string = '';
  module_id: string = '';
  page_id: string = '';
  section_id: string = '';
  content_type: string = '';
  content_data: string = '';
  tag_info: string = '';
  class_name: string = '';
  mediaPath: string = '';
  cols: string = '0';
  resp: string = '';
  uploadFile = 'Select File';
  // =========  Image ================
  elm: any;
  fileName: string = '';
  fileExt: string = '';
  docExtId: number = 0;
  // imageUploadPath: string = 'http://localhost/backendXSG/images/';
  @Input() arrContent: any = {};
  @Input() content: string = '';
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    private http: HttpClient,
    public dataService: DataService,
    private _snackBar: MatSnackBar
  ) {}

  on_change_width(event: any) {
    console.log(event.target.value);
    this.cols = event.target.value;
  }
  save_image_data() {
    if (this.cols == '0') {
      this.openSnackBar('Image width required.....', 'Close', {});
    } else {
      const img_id = this.create_image_id();
      let data = {
        template_id: this.stateService.content_id,
        content_type: '2',
        content: img_id + this.fileExt,
        class_name: this.class_name,
        cols: this.cols,
        chCode: 'hg_gt78999@%^&',
        queryId: '17',
      };
      console.log(data);
      this.backendService.SubmitQueryCms(data).subscribe((resp: any) => {
        if (resp.ResponseCode == '401') {
          console.log('No data...');
        } else {
          console.log(resp);
          this.resp = resp.Msg;
          this.upload_image(img_id, 'HTSAB001');
        }
      });
    }
  }

  create_image_id() {
    const d = new Date();
    let timeStamp = d.getTime();
    return 'img' + timeStamp;
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

  upload_image(ImgId: string, imgFolder: string) {
    console.log(ImgId);
    let imgData = new FormData();
    let imgContent = ImgId + '-' + this.docExtId + '-' + imgFolder;
    imgData.append('file', this.elm.files[0], imgContent);
    console.log('File Name @bes: ', imgContent);
    this.http
      .post(this.backendService.mediaPath + 'image_upload_script.php', imgData)
      .subscribe((resp) => {
        if (resp) {
          console.log('Upload Successful...');
        } else {
          console.log('Upload Successful.');
        }
      });
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
    console.log('Templete Component :', this.arrContent);
  }
}
