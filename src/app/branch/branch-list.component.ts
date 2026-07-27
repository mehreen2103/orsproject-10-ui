import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  
})
export class BranchListComponent extends BaseListCtl{

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
        super(locator.endpoints.BRANCH, locator, route);
      }

}
