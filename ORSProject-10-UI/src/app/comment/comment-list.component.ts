import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute,) {
      super(locator.endpoints.Comment, locator, route);
    }

}
