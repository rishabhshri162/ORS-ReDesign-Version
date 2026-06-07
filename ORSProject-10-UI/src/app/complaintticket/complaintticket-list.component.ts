import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complaintticket-list',
  templateUrl: './complaintticket-list.component.html',
})
export class ComplaintticketListComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.COMPLAINTTICKET, locator, route);
  }

}
