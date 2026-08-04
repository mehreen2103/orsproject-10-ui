import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
})
export class ClassroomListComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService, route:ActivatedRoute){
    super(locator.endpoints.CLASSROOM, locator, route);
  }

}
