import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
})
export class FeedbackListComponent extends BaseListCtl{
  
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute,) {
        super(locator.endpoints.Feedback, locator, route);
      }

  

}
