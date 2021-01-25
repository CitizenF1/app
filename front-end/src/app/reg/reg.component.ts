import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  signUp(){
    console.log("work")
    return false
  }

}
