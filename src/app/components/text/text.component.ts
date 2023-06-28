import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  content_id: string = '';
  module_id: string = '';
  page_id: string = '';
  content_type: string = '';
  content_data: string = '';
  class_name: string = '';
  cols: string = '0';
  resp: string = 'Response on save ...';
  @Input() arrContent: any = {};
  @Input() arrEditParam: any = {};
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService,
    private _snackBar: MatSnackBar
  ) {}

  set_text_style(ClassName: string) {
    this.class_name = ClassName;
  }

  on_change_width(event: any) {
    console.log(event.target.value);
    this.cols = event.target.value;
  }

  add_text(val: any) {
    if (this.cols == '0') {
      this.openSnackBar('Text width required.....', 'Close', {});
    } else {
      let data = {
        template_id: this.stateService.content_id,
        content_type: '1',
        content: val.content_data,
        class_name: this.class_name,
        cols: val.cols,
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
        }
      });
    }
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  ngOnInit(): void {
    console.log('Text Component :', this.arrContent);
    
  }
}
