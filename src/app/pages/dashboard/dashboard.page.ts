import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'dashboard-page',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.css']
})
export class DashboardPage {
  displayedColumns = ['id', 'name', 'email'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= NAMES.length; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public addNewUser(){
    console.log('click');
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[id - 1];
  const email = EMAILS[id - 1];

  return {
    id: id.toString(),
    name: name,
    email: email
  };
}

/** Constants used to fill up our data base. */
const NAMES = ['Teste Usuario 1', 'Teste Usuario 2', 'Teste Usuario 3', 'Teste Usuario 4'];
const EMAILS = ['teste1@teste.com', 'teste2@teste.com','teste3@teste.com', 'teste4@teste.com'];

export interface UserData {
  id: string;
  name: string;
  email: string;
}
