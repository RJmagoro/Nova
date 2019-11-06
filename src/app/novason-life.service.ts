import { Buynow10PageModule } from './buynow10/buynow10.module';
import { Buymodule10Module } from './buymodule10/buymodule10.module';
import { Spouse3PageModule } from './spouse3/spouse3.module';
import { BeneficiaryPageModule } from './beneficiary/beneficiary.module';
import { Buynow4PageModule } from './buynow4/buynow4.module';
import { ClaimformPageModule } from './claimform/claimform.module';
import { Buynow7PageModule } from './buynow7/buynow7.module';
import { Customer } from './class/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NovasonLifeService {

  public _customer: string = "http://localhost:8080/customer/";
  public _insuranceplan: string = "http://localhost:8080/insuranceplan/";
  public _children: string = "http://localhost:8080/children/";
  public _extended: string = "http://localhost:8080/extended/";
  public _claim: string = "http://localhost:8080/claim/";
  public _beneficiary: string = "http://localhost:8080/beneficiary/";
  public _spouse: string = "http://localhost:8080/spouse/";

  constructor(private _http: HttpClient, private _storage: Storage) { }

  //Customer
  getCustomers() {
    return this._http.get(this._customer);
  }

  postCustomer(customer: Customer) {
    return this._http.post(this._customer, customer);
  }

  getSignInCustomer(email: string, password: string) {
    return this._http.get(this._customer + email + "/" + password)
  }

  customerSetSession(customer: any) {
    return this._storage.set("user", JSON.stringify(customer));
  }

  customerGetSession() {
    return this._storage.get("user");
  }

  customerRemoveSession() {
    return this._storage.remove("user");
  }

  customerResetPass(email: string) {
    return this._http.get(this._customer + "resetpassword/" + email)
  }

  putCustomer(id: string, customer: Customer) {
    return this._http.put(this._customer + id, customer);
  }

  //Childern
  postChildren(children: Buynow7PageModule) {
    return this._http.post(this._children, children);
  }

  getChildren() {
    return this._http.get(this._children);
  }

  deleteChildren(id: number) {
    return this._http.delete(this._children + id)
  }

  //Claim
  postClaim(claim: ClaimformPageModule) {
    return this._http.post(this._claim, claim);
  }

  getClaims() {
    return this._http.get(this._claim);
  }

  //Extended
  postExtended(extended: Buynow10PageModule) {
    return this._http.post(this._extended, extended);
  }

  getExtended() {
    return this._http.get(this._extended);
  }

  deleteExtended(id: number) {
    return this._http.delete(this._extended + id)
  }

  //Insuranceplan
  postInsurancePlan(insuranceplan: Buynow4PageModule) {
    return this._http.post(this._insuranceplan, insuranceplan);
  }

  getAllPlans() {
    return this._http.get(this._insuranceplan)
  }

  putInsurancePlan(insuranceplan: Buynow4PageModule) {
    return this._http.put(this._insuranceplan, insuranceplan);
  }

  //Beneficiary
  postBeneficiary(beneficiary: BeneficiaryPageModule) {
    return this._http.post(this._beneficiary, beneficiary);
  }

  getBeneficiary() {
    return this._http.get(this._beneficiary);
  }

  deleteBeneficiary(id: number) {
    return this._http.delete(this._beneficiary + id)
  }

  //Spouse
  postSpouse(spouse: Spouse3PageModule) {
    return this._http.post(this._spouse, spouse);
  }

  getSpouse() {
    return this._http.get(this._spouse);
  }

  deleteSpouse(id: number) {
    return this._http.delete(this._spouse + id)
  }
}