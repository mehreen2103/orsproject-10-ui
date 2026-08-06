import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8080";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public WEATHER = this.SERVER_URL + "/Weather";
  public DRONE = this.SERVER_URL + "/Drone";
  public BRANCH = this.SERVER_URL + "/Branch";
  public DEPARTMENT = this.SERVER_URL + "/Department";
  public FEE = this.SERVER_URL + "/Fee";
  public SCHOLARSHIP = this.SERVER_URL + "/Scholarship";
  public INSURANCE = this.SERVER_URL + "/Insurance";
  public ASSIGNMENT = this.SERVER_URL + "/Assignment";
  public CLASSROOM = this.SERVER_URL + "/Classroom";
  public ATM = this.SERVER_URL + "/Atm";
  public CREDITCARD = this.SERVER_URL + "/Creditcard";
}