import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  
})
export class BranchComponent extends BaseCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
        super(locator.endpoints.BRANCH, locator, route);
      }

}
