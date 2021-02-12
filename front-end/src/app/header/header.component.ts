import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logooutUser(){
    this.authServise.logout()
    this._flashMessagesService.show("You are logget out",
      { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/auth'])
  }

}
