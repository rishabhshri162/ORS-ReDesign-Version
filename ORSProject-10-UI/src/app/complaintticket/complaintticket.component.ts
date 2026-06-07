import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-complaintticket',
  templateUrl: './complaintticket.component.html',
})
export class ComplaintticketComponent extends BaseCtl{

 constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.COMPLAINTTICKET, locator, route);
  }

    
  }  
