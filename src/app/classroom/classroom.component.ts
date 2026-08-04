import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
})
export class ClassroomComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, route:ActivatedRoute){
    super(locator.endpoints.CLASSROOM, locator, route);
  }
}
