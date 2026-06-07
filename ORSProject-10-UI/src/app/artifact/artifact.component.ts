import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
})
export class ArtifactComponent extends BaseCtl{

  constructor(
      public locator: ServiceLocatorService,
      route: ActivatedRoute,
    ) {
      super(locator.endpoints.Artifact, locator, route);
    }

}
