import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from 'src/app/services/backend.service';
import { HttpClient } from '@angular/common/http';
import * as dayjs from 'dayjs';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-audiorecorder',
  templateUrl: './audiorecorder.component.html',
  styleUrls: ['./audiorecorder.component.scss'],
})
export class AudiorecorderComponent implements OnInit {
  title: any = 'micRecorder';
  fileExt: string = '';
  docExtId: number = 4;
  audio_uploaded: boolean = false;
  file_name: string = '';
  elm: any;
  record: any;
  recording = false;
  url: any;
  error: any;
  options: any = {};
  @Input() assessmentObj: any = {};
  constructor(
    private router: Router,
    public loc: Location,
    private domSanitizer: DomSanitizer,
    private backendService: BackendService,
    private http: HttpClient,
    private stateService: StateService
  ) {}
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: true,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: any) {
    this.options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1,
      sampleRate: 50000,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, this.options);
    this.record.record();
  }

  // AudioWorkletNode
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */

  processRecording(blob: any) {
    this.url = URL.createObjectURL(blob);
    console.log('blob', blob);
    console.log('url', this.url);
    this.file_name =
      this.assessmentObj.student_id + '_' + this.assessmentObj.question_id;
    let file = new File([blob], this.file_name.valueOf(), {
      type: 'audio/wav',
    });
    this.upload_audio(file);
  }

  upload_audio(file: File) {
    let audioFolder = this.assessmentObj.course_id;
    let mediaData = new FormData();
    let mediaContent = this.file_name + '-' + this.docExtId + '-' + audioFolder;
    mediaData.append('file', file, mediaContent);
    console.log('File Name @bes: ', mediaContent);
    this.http
      .post(
        this.backendService.mediaPath + 'media_upload_script.php',
        mediaData
      )
      .subscribe((resp) => {
        if (resp) {
          console.log('Upload Successful...');
          this.audio_uploaded = true;
        } else {
          this.audio_uploaded = true;
        }
      });
    this.submit_to_student_progress();
  }

  submit_to_student_progress() {
    let now = dayjs();
    let params = {
      session_id: this.create_session_id(),
      student_id: this.assessmentObj.student_id,
      course_id: this.assessmentObj.course_id,
      module_id: this.assessmentObj.module_id,
      assessment_type: 3,
      question_type: 4,
      has_completed: 2,
      remarks: 'VA - To be assessed',
      date_time: now.format('YYYY-MM-DD') + ' ' + now.format('HH:mm:ss'),
      chCode: 'hg_gt78999@%^&',
      queryId: '5',
    };
    console.log('Student Progress: ', params);
    this.backendService.SubmitQueryStudent(params).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);

        let payload1 = {
          session_id: resp.session_id,
          question_id: this.assessmentObj.question_id,
          answer: 'audio file',
          chCode: 'hg_gt78999@%^&',
          queryId: '5A',
        };
        console.log('Payload 1: ', payload1);
        this.submit_to_student_progress_breakdown(payload1);

        let payload2 = {
          session_id: resp.session_id,
          image_data: this.stateService.arrValidateStudent[0].image_data,
          date_time: params.date_time,
          chCode: 'hg_gt78999@%^&',
          queryId: '5B',
        };
        console.log('Payload 2: ', payload2);
        this.save_image_for_student_validation(payload2);
      }
    });
  }

  submit_to_student_progress_breakdown(params: any) {
    this.backendService.SubmitQueryStudent(params).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);
      }
    });
  }

  save_image_for_student_validation(params: any) {
    this.backendService.SubmitQueryStudent(params).subscribe((resp: any) => {
      if (resp.ResponseCode == '401') {
        console.log('No data...');
      } else {
        console.log('Data : ', resp);
      }
    });
  }

  create_session_id() {
    const d = new Date();
    return d.getTime();
  }

  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
  ngOnInit() {}
}
