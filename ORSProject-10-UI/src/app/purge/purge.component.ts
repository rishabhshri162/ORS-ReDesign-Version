import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purge',
  templateUrl: './purge.component.html',
})
export class PurgeComponent extends BaseCtl{
  
   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
         super(locator.endpoints.Purge, locator, route);
      }

}
