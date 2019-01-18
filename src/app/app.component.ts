import { Component } from '@angular/core';
import { AuthService } from './pages/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Decora - Application';

  showMenu: boolean = false;

  constructor(private _authService: AuthService){}

  public ngOnint(){
    this._authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }
}
