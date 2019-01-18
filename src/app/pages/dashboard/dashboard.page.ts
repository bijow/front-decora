import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-page',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.css']
})

export class DashboardPage implements OnInit {

  constructor() { }

  public ngOnInit() { }

  public addNewUser(){
    console.log('click');
  }
}
