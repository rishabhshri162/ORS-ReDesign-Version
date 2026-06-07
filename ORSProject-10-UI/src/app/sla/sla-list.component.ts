import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-sla-list',
  templateUrl: './sla-list.component.html',
})
export class SlaListComponent extends BaseListCtl {
  constructor(
    public Locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(Locator.endpoints.SLA, Locator, route);
  }
}
