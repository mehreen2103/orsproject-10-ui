import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creditcard-list',
  templateUrl: './creditcard-list.component.html',
})
export class CreditcardListComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.CREDITCARD, locator, route);
    }
  

}
