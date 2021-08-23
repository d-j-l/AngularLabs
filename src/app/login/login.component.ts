import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="";
  password="";
  user="";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  itemClicked(){
    if (this.email == "dylan" && this.password == "dylan") {
      var user = "dylan";
      this.router.navigate(["/account", user])
    }
    else if (this.email == "cedric" && this.password == "cedric") {
      var user = "cedric";
      this.router.navigate(["/account", user])
    }
    else if (this.email == "hayden" && this.password == "hayden") {
      var user = "hayden";
      this.router.navigate(["/account", user])
    }
    else {
      alert("Unauthorised")
    }
  }
}
