import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dietplan-list',
  templateUrl: './dietplan-list.component.html',
})
export class DietplanListComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute,) {
         super(locator.endpoints.DIETPLAN, locator, route);
       }

}
