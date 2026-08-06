import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';

import { FormsModule } from '@angular/forms';
;
import { NavbarComponent } from './navbar/navbar.component';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CollegeComponent } from './college/college.component';
import { TimetableComponent } from './timetable/timetable.component';
import { RoleListComponent } from './role/role-list.component';
import { FooterComponent } from './footer/footer.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './user/myprofile.component';
import { AuthService } from './auth-service.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherListComponent } from './weather/weatherlist.component';
import { DroneComponent } from './drone/drone.component';
import { DroneListComponent } from './drone/drone-list.component';
import { BranchComponent } from './branch/branch.component';
import { BranchListComponent } from './branch/branch-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list.component';
import { FeeComponent } from './fee/fee.component';
import { FeeListComponent } from './fee/fee-list.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ScholarshipListComponent } from './scholarship/scholarship-list.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceListComponent } from './insurance/insurance-list.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentListComponent } from './assignment/assignment-list.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomListComponent } from './classroom/classroom-list.component';
import { AtmComponent } from './atm/atm.component';
import { AtmListComponent } from './atm/atm-list.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CreditcardListComponent } from './creditcard/creditcard-list.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChangepasswordComponent,
    UserComponent,
    UserListComponent,
    RoleComponent,
    StudentComponent,
    FacultyComponent,
    CourseComponent,
    SubjectComponent,
    MarksheetComponent,
    CollegeComponent,
    TimetableComponent,
    RoleListComponent,
    FooterComponent,
    CollegeListComponent,
    StudentListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    MyprofileComponent,
    GetMarksheetComponent,
    MeritListComponent,
    WeatherComponent,
    WeatherListComponent,
    DroneComponent,
    DroneListComponent,
    BranchComponent,
    BranchListComponent,
    DepartmentComponent,
    DepartmentListComponent,
    FeeComponent,
    FeeListComponent,
    ScholarshipComponent,
    ScholarshipListComponent,
    InsuranceComponent,
    InsuranceListComponent,
    AssignmentComponent,
    AssignmentListComponent,
    ClassroomComponent,
    ClassroomListComponent,
    AtmComponent,
    AtmListComponent,
    CreditcardComponent,
    CreditcardListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
    AuthenticatorResponse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }