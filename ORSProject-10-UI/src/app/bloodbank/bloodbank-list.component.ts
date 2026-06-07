import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-bloodbank-list',
  templateUrl: './bloodbank-list.component.html',
})
export class BloodbankListComponent extends BaseListCtl{
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.BloodBank, locator, route);
  }

}
