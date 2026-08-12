import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
})
export class LibraryListComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
         super(locator.endpoints.LIBRARY, locator, route);
       }

}
