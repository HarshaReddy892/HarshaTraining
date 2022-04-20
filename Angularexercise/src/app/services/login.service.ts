import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:any
  data:any
  response:any
  constructor(private _http:HttpClient,private _router:Router) { }

  public authenticateEmployee(data: any) {
    debugger;
    console.log(data)
    return this._http.get("http://localhost:3000/employee").subscribe(res => {
      this.user = res;
      this.data = data;
      this.authenticateUser();
      this.navigateUser();
    })
  }
  authenticateUser() {
    this.response = (this.user.find((x: any) => {
      debugger;
      return x.userName == this.data.email && x.password == this.data.password
    }))
  }
  navigateUser() {
    if (this.response) {
      this.checkRole();
    }
    else {
      
    }
  }
  checkRole() {
    if (this.response.role === 'admin') {
      this._router.navigate(['list'], { queryParams: { name: this.response.name } })
    }
    else if(this.response.role === 'user') {
      this._router.navigate(['request'])
      // this._router.navigate(['userRequest',this.response.id],{queryParams:{id:this.response.id}})
    }
    else {
    }
  }
}
