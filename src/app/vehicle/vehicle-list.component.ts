import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
})
export class VehicleListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.VEHICLE, locator, route);
    }

}
