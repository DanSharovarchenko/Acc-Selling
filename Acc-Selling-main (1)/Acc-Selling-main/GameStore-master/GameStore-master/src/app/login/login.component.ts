import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    name: string='';
    surname: string='';
    mail: string='';
    password: string='';
    password1: string='';
    incorrectPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  register():void{
    if (this.mail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
      console.log("ok");
      } else {
      console.log("not ok");
      return
    }
   if (this.password !== this.password1){
    this.incorrectPassword = true;
    return;
   } else{
    this.incorrectPassword = false;
   }
    let user_obj ={
      name: this.name,
      surname: this.surname,
      mail: this.mail,
      password: this.password,
      password1: this.password1,
    }
    let user_str: string =JSON.stringify(user_obj);
    localStorage.setItem('userinfo',user_str)
    
    
  
  }
  
    }
    
  

