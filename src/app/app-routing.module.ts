import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SubjectComponent } from './subject/subject.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TimetableComponent } from './timetable/timetable.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { RoleListComponent } from './role/role-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { CollegeComponent } from './college/college.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './user/myprofile.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherListComponent } from './weather/weatherlist.component';
import { DroneComponent } from './drone/drone.component';
import { DroneListComponent } from './drone/drone-list.component';
import { BranchComponent } from './branch/branch.component';
import { BranchListComponent } from './branch/branch-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list.component';
import { FeeListComponent } from './fee/fee-list.component';
import { FeeComponent } from './fee/fee.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ScholarshipListComponent } from './scholarship/scholarship-list.component';
import { InsuranceListComponent } from './insurance/insurance-list.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AssignmentListComponent } from './assignment/assignment-list.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomListComponent } from './classroom/classroom-list.component';
import { AtmComponent } from './atm/atm.component';
import { AtmListComponent } from './atm/atm-list.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },

  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'rolelist',
    component: RoleListComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'collegelist',
    component: CollegeListComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'studentlist',
    component: StudentListComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },
  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'subjectlist',
    component: SubjectListComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'facultylist',
    component: FacultyListComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'getmarksheet',
    component: GetMarksheetComponent
  },
  {
    path: 'meritlist',
    component: MeritListComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'weather/:id',
    component: WeatherComponent
  },
  {
    path: 'weatherlist',
    component: WeatherListComponent
  },
  {
    path: 'drone',
    component: DroneComponent,
  },
  {
    path: 'dronelist',
    component: DroneListComponent,
  },
  {
    path: 'drone/:id',
    component: DroneComponent
  },
  {
    path: 'branch',
    component: BranchComponent,
  },
  {
    path: 'branchlist',
    component: BranchListComponent,
  },
  {
    path: 'branch/:id',
    component: BranchComponent
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'departmentlist',
    component: DepartmentListComponent,
  },
  {
    path: 'department/:id',
    component: DepartmentComponent
  },
  {
    path: 'fee',
    component: FeeComponent,
  },
  {
    path: 'feelist',
    component: FeeListComponent,
  },
  {
    path: 'fee/:id',
    component: FeeComponent
  },
  {
    path: 'scholarship',
    component: ScholarshipComponent,
  },
  {
    path: 'scholarshiplist',
    component: ScholarshipListComponent,
  },
  {
    path: 'scholarship/:id',
    component: ScholarshipComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
  },
  {
    path: 'insurancelist',
    component: InsuranceListComponent,
  },
  {
    path: 'insurance/:id',
    component: InsuranceComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent,
  },
  {
    path: 'assignmentlist',
    component: AssignmentListComponent,
  },
  {
    path: 'assignment/:id',
    component: AssignmentComponent
  },
  {
    path: 'classroom',
    component: ClassroomComponent,
  },
  {
    path: 'classroomlist',
    component: ClassroomListComponent,
  },
  {
    path: 'classroom/:id',
    component: ClassroomComponent
  },
  {
    path: 'atm',
    component: AtmComponent,
    
  },
  {
    path: 'atmlist',
    component: AtmListComponent,
  },
  {
    path: 'atm/:id',
    component: AtmComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }