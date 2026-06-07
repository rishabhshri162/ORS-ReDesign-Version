import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-build1',
  templateUrl: './build1.component.html',
})
export class Build1Component extends BaseCtl{
   constructor(
        public locator: ServiceLocatorService,
        route: ActivatedRoute,
      ) {
        super(locator.endpoints.Build1, locator, route);
      }
  

}
