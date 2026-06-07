

import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
})
export class MeetingListComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.MEETING, locator, route);
  }

}
