import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
})
export class AtmComponent extends BaseCtl {

  constructor(public servicelocator:ServiceLocatorService, route : ActivatedRoute){
    super(servicelocator.endpoints.ATM, servicelocator, route);
  }

}
