import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public login(): void {
    // TODO: login
  }

  public logoff(): void { }

  public get name(): string { return ""; }

  ngOnInit() { }

}
