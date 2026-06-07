import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-recharge-list',
  templateUrl: './recharge-list.component.html',
})
export class RechargeListComponent extends BaseListCtl {
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.Recharge, locator, route);
  }
}
