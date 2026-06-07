import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EndpointServiceService {
  constructor() {}

  public SERVER_URL = 'http://localhost:8080';
  public MESSAGE = this.SERVER_URL + '/Message';
  public USER = this.SERVER_URL + '/User';
  public ROLE = this.SERVER_URL + '/Role';
  public COLLEGE = this.SERVER_URL + '/College';
  public MARKSHEET = this.SERVER_URL + '/Marksheet';
  public STUDENT = this.SERVER_URL + '/Student';
  public SUBJECT = this.SERVER_URL + '/Subject';
  public FACULTY = this.SERVER_URL + '/Faculty';
  public COURSE = this.SERVER_URL + '/Course';
  public TIMETABLE = this.SERVER_URL + '/TimeTable';
  public JASPERREPORT = this.SERVER_URL + '/Jasper';
  public Transport = this.SERVER_URL + '/Transport';
  public LabTest = this.SERVER_URL + '/LabTest';
  public Recharge = this.SERVER_URL + '/Recharge';
  public Feedback = this.SERVER_URL + '/Feedback';
  public Comment = this.SERVER_URL + '/Comment';
  public Timezone = this.SERVER_URL + '/timezone';
  public Smart = this.SERVER_URL + '/smart';
  public BloodBank = this.SERVER_URL + '/bloodbank';
  public Purchase = this.SERVER_URL + '/purchase';
  public Device = this.SERVER_URL + '/device';
  public Stock = this.SERVER_URL + '/stock';
  public Artifact = this.SERVER_URL + '/artifact';
  public Build1 = this.SERVER_URL + '/build';
  public Invoice = this.SERVER_URL + '/invoice';
  public Purge = this.SERVER_URL + '/purge';
  public DATAMASKING = this.SERVER_URL + '/datamasking';
  public COMPLAINTTICKET = this.SERVER_URL + '/complaintticket';
  public DIETPLAN = this.SERVER_URL + '/dietplan';
  public SLA = this.SERVER_URL + '/sla';
  public CUSTOMER = this.SERVER_URL + '/customer';
  public MEETING = this.SERVER_URL + '/meeting';
  
}
