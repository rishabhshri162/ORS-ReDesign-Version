import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
})
export class SlaComponent extends BaseCtl{

  constructor(public Locator: ServiceLocatorService, route: ActivatedRoute) {
    super(Locator.endpoints.SLA, Locator, route);
  }

}
