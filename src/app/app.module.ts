import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { WebcamModule } from 'ngx-webcam';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { TextComponent } from './components/text/text.component';
import { ImageComponent } from './components/image/image.component';
import { AudioComponent } from './components/audio/audio.component';
import { VideoComponent } from './components/video/video.component';
import { LoginComponent } from './pages/login/login.component';
import { AccesscourseComponent } from './dashboard/accesscourse/accesscourse.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';

import { CombassessmentmcComponent } from './components/combassessmentmc/combassessmentmc.component';
import { CombassessmentfbComponent } from './components/combassessmentfb/combassessmentfb.component';
import { AudiorecorderComponent } from './components/audiorecorder/audiorecorder.component';
import { TakeimageComponent } from './components/takeimage/takeimage.component';
import { PaymentmoduleComponent } from './pages/paymentmodule/paymentmodule.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { CombassessmentsqComponent } from './components/combassessmentsq/combassessmentsq.component';
import { FooterinfoComponent } from './components/footerinfo/footerinfo.component';
import { DownloadComponent } from './pages/download/download.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SliderComponent } from './components/slider/slider.component';
import { AccountComponent } from './pages/account/account.component';
import { CoursematerialsComponent } from './dashboard/coursematerials/coursematerials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    CoursesComponent,
    BlogComponent,
    FaqsComponent,
    NavbarComponent,
    TableComponent,
    TextComponent,
    ImageComponent,
    AudioComponent,
    VideoComponent,
    LoginComponent,
    AccesscourseComponent,
    AssessmentComponent,
    QuizComponent,
    TestComponent,
    FooterComponent,
    RegisterComponent,
    CombassessmentmcComponent,
    CombassessmentfbComponent,
    AudiorecorderComponent,
    TakeimageComponent,
    PaymentmoduleComponent,
    MyprofileComponent,
    CombassessmentsqComponent,
    FooterinfoComponent,
    DownloadComponent,
    LandingComponent,
    SliderComponent,
    AccountComponent,
    CoursematerialsComponent,
  ],
  imports: [
    LazyLoadImageModule,
    MatInputModule,
    WebcamModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatExpansionModule,
    MatStepperModule,
    SlickCarouselModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'about',
          component: AboutusComponent,
        },
        {
          path: 'contact',
          component: ContactusComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'payment-module',
          component: PaymentmoduleComponent,
        },
        {
          path: 'download',
          component: DownloadComponent,
        },
        {
          path: 'owned-courses',
          component: MyprofileComponent,
        },
        {
          path: 'access-course',
          component: CoursematerialsComponent,
        },
        {
          path: 'signup-student',
          component: RegisterComponent,
        },
        {
          path: 'account',
          component: AccountComponent,
        },
        {
          path: 'courses',
          component: CoursesComponent,
        },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ,{scrollPositionRestoration: 'enabled'}
