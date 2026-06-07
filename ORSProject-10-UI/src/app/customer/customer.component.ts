import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent extends BaseCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.CUSTOMER, locator, route);
    }

}

