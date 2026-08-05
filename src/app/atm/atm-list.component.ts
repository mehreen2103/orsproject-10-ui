import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atm-list',
  templateUrl: './atm-list.component.html',
})
export class AtmListComponent extends BaseListCtl{

  constructor(public servicelocator: ServiceLocatorService, route: ActivatedRoute){
    super(servicelocator.endpoints.ATM, servicelocator, route);
 }

}
