import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FooterComponent } from './footer/footer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { TransportComponent } from './transport/transport.component';
import { TransportListComponent } from './transport/transport-list.component';
import { LabtestComponent } from './labtest/labtest.component';
import { LabtestListComponent } from './labtest/labtest-list.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RechargeListComponent } from './recharge/recharge-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list.component';
import { TimezoneComponent } from './timezone/timezone.component';
import { TimezoneListComponent } from './timezone/timezone-list.component';
import { SmarthomedeviceComponent } from './smarthomedevice/smarthomedevice.component';
import { SmarthomedeviceListComponent } from './smarthomedevice/smarthomedevice-list.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BloodbankListComponent } from './bloodbank/bloodbank-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseListComponent } from './purchase/purchase-list.component';
import { DeviceComponent } from './device/device.component';
import { DeviceListComponent } from './device/device-list.component';
import { StockComponent } from './stock/stock.component';
import { StockListComponent } from './stock/stock-list.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { ArtifactListComponent } from './artifact/artifact-list.component';
import { Build1Component } from './build1/build1.component';
import { Build1ListComponent } from './build1/build1-list.component';
import { InvoiceitemComponent } from './invoiceitem/invoiceitem.component';
import { InvoiceitemListComponent } from './invoiceitem/invoiceitem-list.component';
import { PurgeComponent } from './purge/purge.component';
import { PurgeListComponent } from './purge/purge-list.component';
import { DatamaskingComponent } from './datamasking/datamasking.component';
import { DatamaskingListComponent } from './datamasking/datamasking-list.component';
import { ComplaintticketComponent } from './complaintticket/complaintticket.component';
import { ComplaintticketListComponent } from './complaintticket/complaintticket-list.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DietplanListComponent } from './dietplan/dietplan-list.component';
import { SlaComponent } from './sla/sla.component';
import { SlaListComponent } from './sla/sla-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingListComponent } from './meeting/meeting-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent,
    CollegeComponent,
    StudentComponent,
    MarksheetComponent,
    CourseComponent,
    SubjectComponent,
    TimetableComponent,
    FooterComponent,
    FacultyComponent,
    RoleListComponent,
    UserListComponent,
    CollegeListComponent,
    StudentListComponent,
    MarksheetListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    MyprofileComponent,
    MarksheetmeritlistComponent,
    GetmarksheetComponent,
    TransportComponent,
    TransportListComponent,
    LabtestComponent,
    LabtestListComponent,
    RechargeComponent,
    RechargeListComponent,
    FeedbackComponent,
    FeedbackListComponent,
    CommentComponent,
    CommentListComponent,
    TimezoneComponent,
    TimezoneListComponent,
    SmarthomedeviceComponent,
    SmarthomedeviceListComponent,
    BloodbankComponent,
    BloodbankListComponent,
    PurchaseComponent,
    PurchaseListComponent,
    DeviceComponent,
    DeviceListComponent,
    StockComponent,
    StockListComponent,
    ArtifactComponent,
    ArtifactListComponent,
    Build1Component,
    Build1ListComponent,
    InvoiceitemComponent,
    InvoiceitemListComponent,
    PurgeComponent,
    PurgeListComponent,
    DatamaskingComponent,
    DatamaskingListComponent,
    ComplaintticketComponent,
    ComplaintticketListComponent,
    DietplanComponent,
    DietplanListComponent,
    SlaComponent,
    SlaListComponent,
    CustomerComponent,
    CustomerListComponent,
    MeetingComponent,
    MeetingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true,
    },

    EndpointServiceService,
    HttpServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
