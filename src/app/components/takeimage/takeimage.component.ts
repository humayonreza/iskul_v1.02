import { Component, OnInit, Input } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { interval } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-takeimage',
  templateUrl: './takeimage.component.html',
  styleUrls: ['./takeimage.component.scss'],
})
export class TakeimageComponent implements OnInit {
  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';
  @Input() validationParam: any = {};

  constructor(
    private backendService: BackendService,
    public stateService: StateService
  ) {}

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  capture_image_to_validate(data: any) {
    this.stateService.arrValidateStudent = [];
    if (this.stateService.arrValidateStudent.length == 0) {
      this.stateService.arrValidateStudent.push(data);
      // console.log(
      //   'arrValidateStudent :stateService',
      //   this.stateService.arrValidateStudent
      // );
    }
  }

  snapshot(event: WebcamImage) {
    this.previewImage = event.imageAsDataUrl;
    // console.log('Image Blob Data :', this.previewImage);
    let data = {
      student_id: this.validationParam.student_id,
      question_id: this.validationParam.question_id,
      image_data: this.previewImage,
    };
    this.btnLabel = 'Recapture image';
    this.capture_image_to_validate(data);
  }

  checkPermissions() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 50,
          height: 30,
        },
      })
      .then((res) => {
        console.log('response', res);
        this.stream = res;
        this.status = 'My camera is accessing';
        this.btnLabel = 'Capture image';
      })
      .catch((err) => {
        console.log(err);
        if (err?.message === 'Permission denied') {
          this.status =
            'Permission denied please try again by approving the access';
        } else {
          this.status =
            'You may not having camera system, Please try again ...';
        }
      });
  }

  captureImage() {
    this.trigger.next();
  }

  proceed() {
    console.log(this.previewImage);
  }

  start(val: number) {
    this.captureImage();
  }

  ngOnInit(): void {
    const source = interval(8000);
    const subscribe = source.subscribe((val) => this.start(val));
  }

  ngOnDestroy(): void {
    this.trigger.closed;
    console.log('ngOnDestroy completed');
  }
}
