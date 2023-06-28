import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  // [arrAssessmentTypeVA] = 'arrQuesListbyPage';
  @Input() data: any = [];
  @Input() section: string = '';
  mediaPath: string = '';
  constructor(private BackendService: BackendService, private router: Router) {}
  call_of_action() {
    this.router.navigate(['/courses']);
  }

  ngOnInit(): void {
    this.mediaPath = this.BackendService.mediaPath;
    console.log(this.data);
  }
  slideShow = {
    slidesToShow: screen.width > 480 ? 3 : 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
  };
}
