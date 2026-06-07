import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labtest-list',
  templateUrl: './labtest-list.component.html',
})
export class LabtestListComponent extends BaseListCtl{

   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
       super(locator.endpoints.LabTest, locator, route);
    }

}
