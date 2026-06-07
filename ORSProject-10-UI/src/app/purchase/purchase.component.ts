import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
})
export class PurchaseComponent extends BaseCtl{

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
         super(locator.endpoints.Purchase, locator, route);
      }

}
