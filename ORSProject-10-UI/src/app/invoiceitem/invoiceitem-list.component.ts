import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoiceitem-list',
  templateUrl: './invoiceitem-list.component.html',
})
export class InvoiceitemListComponent extends BaseListCtl {
  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
  ) {
    super(locator.endpoints.Invoice, locator, route);
  }
}
