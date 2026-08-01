import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
})
export class AssignmentComponent extends BaseCtl{
 
   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.ASSIGNMENT, locator,route);
    }
}
