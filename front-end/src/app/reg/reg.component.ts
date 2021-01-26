import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  name: string | undefined
  login: string | undefined
  email: string | undefined
  password: string | undefined

  constructor(private _flashMessagesService: FlashMessagesService)
    
 { }

  ngOnInit(): void {
  }

  signUp() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    }
    if(!user.name){
      this._flashMessagesService.show('Enter your name!', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    else if(!user.login){
      this._flashMessagesService.show('Enter your login!', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    else if(!user.email){
      this._flashMessagesService.show('Enter your email!', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    else if(!user.password){
      this._flashMessagesService.show('Enter your password!', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    return false
  }

}
