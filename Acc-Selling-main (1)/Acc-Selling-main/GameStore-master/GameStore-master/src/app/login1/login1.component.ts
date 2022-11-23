import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {
  mail: string = '';
  password: string = '';
  incorrectPassword: boolean = false;
  incorrectMail: boolean = false;
  entrance = false;
  constructor() { }

  ngOnInit(): void { }
  enter(): void {
    let user_str = localStorage.getItem("userinfo")
    if (user_str !== null) {
    } else {
      return
    }
    let user = JSON.parse(user_str);
    if (this.mail === user['mail']) {

    } else {
      this.incorrectMail = true;
      return;
    }
    if (this.password === user['password']) {
    } else {
      this.incorrectPassword = true;
      return;
    }
    alert("Вы успешно вошли")
  }
}
