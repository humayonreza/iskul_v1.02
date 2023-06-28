import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { DataService } from 'src/app/services/data.service';
import { StateService } from 'src/app/services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  mediaPath: string = '';
  total_rows: string = '';
  total_cols: string = '';
  cols: string = '0';
  models: any = [];
  arrTabForm: any = [];
  is_table_generated: boolean = false;
  resp: string = '';
  @Input() arrContent: any = {};
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public dataService: DataService,
    private _snackBar: MatSnackBar
  ) {}

  generate_table_form() {
    this.models = [];
    for (let i = 0; i < parseInt(this.total_rows); i++) {
      for (let k = 0; k < parseInt(this.total_cols); k++) {
        let data = {
          td: 'td' + i + k,
        };
        this.arrTabForm = this.arrTabForm.concat(data);
        //
      }
      this.models.push(this.arrTabForm);
      this.arrTabForm = [];
    }
    console.log('Table Form :', this.models);
    this.is_table_generated = true;
  }

  add_table_content() {
    if (this.cols == '0') {
      this.openSnackBar('Table width required.....', 'Close', {});
    } else {
      let dx = {
        template_id: this.stateService.content_id,
        content_type: '3',
        content: JSON.stringify(this.models),
        class_name: 'reg',
        cols: this.cols,
        chCode: 'hg_gt78999@%^&',
        queryId: '17',
      };
      console.log(dx);
      this.backendService.SubmitQueryCms(dx).subscribe((resp: any) => {
        if (resp.ResponseCode == '401') {
          console.log('No data...');
        } else {
          console.log(resp);
          this.resp = resp.Msg;
          this.is_table_generated = false;
        }
      });
    }
  }

  on_change_width(event: any) {
    console.log(event.target.value);
    this.cols = event.target.value;
  }

  openSnackBar(message: string, action: string, {}) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['bg-snackbar'],
    });
  }

  ngOnInit(): void {
    this.mediaPath = this.backendService.mediaPath;
  }
}
