import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
})
export class ArtifactListComponent extends BaseListCtl{

  constructor(
      public locator: ServiceLocatorService,
      route: ActivatedRoute,
    ) {
      super(locator.endpoints.Artifact, locator, route);
    }

}
