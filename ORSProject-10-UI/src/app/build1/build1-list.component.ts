import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-build1-list',
  templateUrl: './build1-list.component.html',
})
export class Build1ListComponent extends BaseListCtl {
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.Build1, locator, route);
  }
}
