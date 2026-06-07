import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purge-list',
  templateUrl: './purge-list.component.html',
})
export class PurgeListComponent extends BaseListCtl{

   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
         super(locator.endpoints.Purge, locator, route);
      }

}
