import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LayoutService } from 'src/app/services/layout.service';
import { StateService } from 'src/app/services/state.service';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Margins } from 'pdfmake/interfaces';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  mediaPath: string = '';
  // mediaPath: string = '';
  arrContents: any = [];
  arrNavByUser: any = [];
  isSmart: boolean = false;
  course_id: any;
  student_id: any;
  arrStudent: any = [];
  full_name: string = '';
  issue_date: string = '';
  expire_date: string = '';
  certificate_name: string = '';
  certificate_no: string = '';
  qrCode: string = ''; //https://smartsoln.org/download/?' + this.student_id
  rto_no: string = '634343';
  abn_no: string = '143233';
  ml_full_name: number = 0;
  ml_issue_date: number = 0;
  ml_signature: number = 0;
  ml_course_title: number = 0;
  isCourseCompleted: boolean = false;
  downloadStatement: string = '';
  constructor(
    private backendService: BackendService,
    public stateService: StateService,
    public layoutService: LayoutService,
    private route: ActivatedRoute
  ) {}

  fetch_student_info(student_id: string) {
    let param = {
      course_id: this.course_id,
      student_id,
      chCode: 'hg_gt78999@%^&',
      queryId: '17',
    };
    console.log(param);
    this.backendService.SubmitQueryStudent(param).subscribe((resp: any) => {
      if (resp == '401') {
        console.log('No data...');
      } else {
        this.arrStudent = resp;
        this.full_name = resp[0].first_name + ' ' + resp[0].last_name;
        if (resp[0].completion_state.length > 0) {
          this.isCourseCompleted = true;
          console.log('Progress : ', this.arrStudent);
          this.full_name = resp[0].first_name + ' ' + resp[0].last_name;
          this.calculate_margin(this.full_name, 1);
          if (this.course_id == 'RSA') {
            this.certificate_name =
              'SITHFAB021 Provide Responsible Service of Alcohol';
            this.calculate_margin(this.certificate_name, 3);
          }
          this.issue_date = resp[0].completion_state[0].completion_date;

          this.expire_date = resp[0].completion_state[0].expire_date;

          this.calculate_margin(this.issue_date, 2);
          this.certificate_no = resp[0].completion_state[0].certificate_no;
          this.qrCode =
            'https://trainedup.com.au/download?id=' +
            this.course_id +
            '&student_id=' +
            this.student_id;
          this.downloadStatement =
            'We congratulate you on your successful completion of course, titled as ' +
            this.certificate_name;
          console.log(this.qrCode);
        } else {
          this.isCourseCompleted = false;
          this.downloadStatement =
            'Sorry, your course titled as ' +
            this.course_id +
            ' is incomplete ';
        }
      }
    });
  }

  calculate_margin(str: string, id: number) {
    console.log(str.length);
    if (str.length == 9) {
      if (id == 1) {
        this.ml_full_name = 210;
      } else if (id == 2) {
        this.ml_issue_date = 210;
      }
    } else {
      let mf = Math.abs(str.length - 9);
      if (id == 1) {
        this.ml_full_name = 210 - mf * 5;
      } else if (id == 2) {
        this.ml_issue_date = 210 - mf * 5;
      } else {
        this.ml_course_title = 210 - mf * 4;
      }
    }
  }

  download_certificate() {
    var docDefinition = {
      background: {
        image: this.layoutService.bgCert,
        width: 620,
      },

      content: [
        { text: 'This is to certify that', style: 'classA' },
        { text: this.full_name, style: 'classB' },
        { text: 'Has fullfilled the requirements for', style: 'classC' },
        {
          text: this.certificate_name,
          style: 'classD',
        },
        {
          text: 'The Qualification is Recognised within the Australian Qualification Framework',
          style: 'classE',
        },
        {
          image: this.layoutService.signature,
          width: 170,
          style: 'imgClassB',
        },

        {
          text: 'Chief Executive Officer, Trained Up Pty Ltd',
          style: 'classH',
        },

        {
          columns: [
            {
              width: 180,
              text: {
                text:
                  ' Trained Up Pty Ltd' +
                  '\n RTO: 40875\nABN: 83 146 976 776' +
                  '\n E: info@trainedup.com.au' +
                  '\n W: https://trainedup.com.au',
              },
              style: 'orgClassA',
            },
            {
              width: '*',
              text: '',
            },
            {
              image: this.layoutService.signature_nrt,
              width: 140,
              style: 'imgClassA',
            },

            {
              width: '*',
              text: '',
            },
            {
              width: 180,
              text: {
                text:
                  'Student No: ' +
                  this.student_id +
                  '\nCertificate No: ' +
                  this.certificate_no +
                  '\nIssue Date : ' +
                  this.issue_date +
                  '\nExpire Date : ' +
                  this.expire_date,
              },
              style: 'clientClassA',
            },
          ],
          style: 'footerClassA',
        },
        {
          columns: [
            {
              width: '*',
              text: '',
            },
            {
              width: 200,
              qr: this.qrCode,
              style: 'qrClassA',
            },
            {
              width: '*',
              text: '',
            },
          ],
          style: 'footerClassA',
        },
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          color: 'blue',
        },
        classA: {
          fontSize: 15,
          bold: true,
          margin: [185, 80, 0, 0] as Margins,
        },
        classB: {
          fontSize: 20,
          bold: true,
          color: 'blue',
          margin: [this.ml_full_name, 25, 0, 0] as Margins,
        },
        classC: {
          fontSize: 15,
          bold: true,
          margin: [145, 25, 0, 0] as Margins,
          color: '#555',
        },
        classD: {
          fontSize: 18,
          bold: true,
          margin: [this.ml_course_title, 25, 0, 0] as Margins,
          color: 'blue',
        },
        classE: {
          fontSize: 13,
          bold: true,
          margin: [35, 25, 0, 0] as Margins,
          color: '#000',
        },
        classF: {
          fontSize: 20,
          bold: true,
          margin: [140, 25, 0, 0] as Margins,
          color: '#000',
        },
        classG: {
          fontSize: 20,
          bold: true,
          margin: [this.ml_signature, 40, 0, 0] as Margins,
          color: '#000',
        },

        classH: {
          fontSize: 15,
          bold: true,
          margin: [110, 2, 0, 0] as Margins,
          color: '#444',
        },

        imgClassA: {
          margin: [0, 0, 0, 0] as Margins,
        },
        imgClassB: {
          margin: [170, 30, 0, 0] as Margins,
        },
        footerClassA: {
          margin: [0, 30, 0, 0] as Margins,
        },
        qrClassA: {
          margin: [20, 35, 0, 0] as Margins,
        },
        orgClassA: {
          margin: [20, 3, 0, 0] as Margins,
        },
        clientClassA: {
          margin: [20, 3, 0, 0] as Margins,
        },
      },
    };
    pdfMake
      .createPdf(docDefinition)
      .download('rsa_' + this.certificate_no + '.pdf');
  }

  ngOnInit(): void {
    this.isSmart = screen.width < 500 ? true : false;
    this.mediaPath = this.backendService.mediaPath;
    this.route.queryParamMap.subscribe((params) => {
      this.course_id = params.get('id');
      this.student_id = params.get('student_id');
      this.fetch_student_info(this.student_id);
    });
  }
}
