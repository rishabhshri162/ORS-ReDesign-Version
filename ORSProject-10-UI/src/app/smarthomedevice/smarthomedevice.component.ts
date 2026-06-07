import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smarthomedevice',
  templateUrl: './smarthomedevice.component.html',
})
export class SmarthomedeviceComponent extends BaseCtl {
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.Smart, locator, route);
  }
}
