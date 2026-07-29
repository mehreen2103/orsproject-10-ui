import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarship-list',
  templateUrl: './scholarship-list.component.html',
})
export class ScholarshipListComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SCHOLARSHIP, locator,route);
  }

}
