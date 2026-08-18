import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.BOOK, locator, route);
    }
  

}
