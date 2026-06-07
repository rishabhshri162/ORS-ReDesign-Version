import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
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
import { SignupComponent } from './login/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
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
import { FeedbackListComponent } from './feedback/feedback-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list.component';
import { TimezoneListComponent } from './timezone/timezone-list.component';
import { TimezoneComponent } from './timezone/timezone.component';
import { SmarthomedeviceListComponent } from './smarthomedevice/smarthomedevice-list.component';
import { SmarthomedeviceComponent } from './smarthomedevice/smarthomedevice.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BloodbankListComponent } from './bloodbank/bloodbank-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseListComponent } from './purchase/purchase-list.component';
import { DeviceListComponent } from './device/device-list.component';
import { DeviceComponent } from './device/device.component';
import { StockComponent } from './stock/stock.component';
import { StockListComponent } from './stock/stock-list.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { ArtifactListComponent } from './artifact/artifact-list.component';
import { Build1Component } from './build1/build1.component';
import { Build1ListComponent } from './build1/build1-list.component';
import { InvoiceitemComponent } from './invoiceitem/invoiceitem.component';
import { InvoiceitemListComponent } from './invoiceitem/invoiceitem-list.component';
import { PurgeListComponent } from './purge/purge-list.component';
import { PurgeComponent } from './purge/purge.component';
import { DatamaskingComponent } from './datamasking/datamasking.component';
import { DatamaskingListComponent } from './datamasking/datamasking-list.component';
import { ComplaintticketListComponent } from './complaintticket/complaintticket-list.component';
import { ComplaintticketComponent } from './complaintticket/complaintticket.component';
import { DietplanListComponent } from './dietplan/dietplan-list.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { SlaListComponent } from './sla/sla-list.component';
import { SlaComponent } from './sla/sla.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingListComponent } from './meeting/meeting-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'role/:id',
    component: RoleComponent,
  },
  {
    path: 'rolelist',
    component: RoleListComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },

  {
    path: 'userlist',
    component: UserListComponent,
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent,
  },
  {
    path: 'college',
    component: CollegeComponent,
  },
  {
    path: 'college/:id',
    component: CollegeComponent,
  },

  {
    path: 'collegelist',
    component: CollegeListComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'student/:id',
    component: StudentComponent,
  },
  {
    path: 'studentlist',
    component: StudentListComponent,
  },
  {
    path: 'marksheet',
    component: MarksheetComponent,
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent,
  },
  {
    path: 'marksheetlist',
    component: MarksheetListComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'course/:id',
    component: CourseComponent,
  },
  {
    path: 'courselist',
    component: CourseListComponent,
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
  {
    path: 'subject/:id',
    component: SubjectComponent,
  },
  {
    path: 'subjectlist',
    component: SubjectListComponent,
  },
  {
    path: 'timetable',
    component: TimetableComponent,
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent,
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent,
  },
  {
    path: 'faculty',
    component: FacultyComponent,
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent,
  },
  {
    path: 'facultylist',
    component: FacultyListComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritlistComponent,
  },
  {
    path: 'getmarksheet',
    component: GetmarksheetComponent,
  },
  {
    path: 'transport',
    component: TransportComponent,
  },
  {
    path: 'transportlist',
    component: TransportListComponent,
  },
  {
    path: 'transport/:id',
    component: TransportComponent,
  },
  {
    path: 'labtest',
    component: LabtestComponent,
  },
  {
    path: 'labtestlist',
    component: LabtestListComponent,
  },
  {
    path: 'labtest/:id',
    component: LabtestComponent,
  },

  {
    path: 'recharge',
    component: RechargeComponent,
  },
  {
    path: 'rechargelist',
    component: RechargeListComponent,
  },
  {
    path: 'recharge/:id',
    component: RechargeComponent,
  },

  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'feedbacklist',
    component: FeedbackListComponent,
  },
  {
    path: 'feedback/:id',
    component: FeedbackComponent,
  },

  {
    path: 'comment',
    component: CommentComponent,
  },
  {
    path: 'commentlist',
    component: CommentListComponent,
  },
  {
    path: 'comment/:id',
    component: CommentComponent,
  },

  {
    path: 'timezone',
    component: TimezoneComponent,
  },
  {
    path: 'timezonelist',
    component: TimezoneListComponent,
  },
  {
    path: 'timezone/:id',
    component: TimezoneComponent,
  },

  {
    path: 'smarthomedevice',
    component: SmarthomedeviceComponent,
  },
  {
    path: 'smarthomedevicelist',
    component: SmarthomedeviceListComponent,
  },
  {
    path: 'smarthomedevice/:id',
    component: SmarthomedeviceComponent,
  },

  {
    path: 'bloodbank',
    component: BloodbankComponent,
  },
  {
    path: 'bloodbanklist',
    component: BloodbankListComponent,
  },
  {
    path: 'bloodbank/:id',
    component: BloodbankComponent,
  },

  {
    path: 'purchase',
    component: PurchaseComponent,
  },
  {
    path: 'purchaselist',
    component: PurchaseListComponent,
  },
  {
    path: 'purchase/:id',
    component: PurchaseComponent,
  },

  {
    path: 'device',
    component: DeviceComponent,
  },
  {
    path: 'devicelist',
    component: DeviceListComponent,
  },
  {
    path: 'device/:id',
    component: DeviceComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },
  {
    path: 'stocklist',
    component: StockListComponent,
  },
  {
    path: 'stock/:id',
    component: StockComponent,
  },

  {
    path: 'artifact',
    component: ArtifactComponent,
  },
  {
    path: 'artifactlist',
    component: ArtifactListComponent,
  },
  {
    path: 'artifact/:id',
    component: ArtifactComponent,
  },

  {
    path: 'build',
    component: Build1Component,
  },
  {
    path: 'buildlist',
    component: Build1ListComponent,
  },
  {
    path: 'build/:id',
    component: Build1Component,
  },

  {
    path: 'invoiceitem',
    component: InvoiceitemComponent,
  },
  {
    path: 'invoiceitemlist',
    component: InvoiceitemListComponent,
  },
  {
    path: 'invoiceitem/:id',
    component: InvoiceitemComponent,
  },

  {
    path: 'purge',
    component: PurgeComponent,
  },
  {
    path: 'purgelist',
    component: PurgeListComponent,
  },
  {
    path: 'purge/:id',
    component: PurgeComponent,
  },

  {
    path: 'datamasking',
    component: DatamaskingComponent,
  },
  {
    path: 'datamaskinglist',
    component: DatamaskingListComponent,
  },
  {
    path: 'datamasking/:id',
    component: DatamaskingComponent,
  },

  {
    path: 'complaintticket',
    component: ComplaintticketComponent,
  },
  {
    path: 'complaintticketlist',
    component: ComplaintticketListComponent,
  },
  {
    path: 'complaintticket/:id',
    component: ComplaintticketComponent,
  },

  {
    path: 'dietplan',
    component: DietplanComponent,
  },
  {
    path: 'dietplanlist',
    component: DietplanListComponent,
  },
  {
    path: 'dietplan/:id',
    component: DietplanComponent,
  },

  {
    path: 'sla',
    component: SlaComponent,
  },
  {
    path: 'slalist',
    component: SlaListComponent,
  },
  {
    path: 'sla/:id',
    component: SlaComponent,
  },

  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'customerlist',
    component: CustomerListComponent,
  },
  {
    path: 'customer/:id',
    component: CustomerComponent,
  },

  {
    path: 'meeting',
    component: MeetingComponent,
  },
  {
    path: 'meetinglist',
    component: MeetingListComponent,
  },
  {
    path: 'meeting/:id',
    component: MeetingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
