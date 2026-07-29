import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
})
export class InsuranceComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.INSURANCE, locator,route);
  }


}
