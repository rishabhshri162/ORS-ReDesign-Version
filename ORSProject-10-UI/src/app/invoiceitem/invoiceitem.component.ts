import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoiceitem',
  templateUrl: './invoiceitem.component.html',
})
export class InvoiceitemComponent extends  BaseCtl{
  
    constructor(public locator: ServiceLocatorService, route: ActivatedRoute,) {
          super(locator.endpoints.Invoice, locator, route);
        }
  }
