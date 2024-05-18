import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microfrontend';
  constructor(private AuthService : AuthLibService){
    console.log(AuthService.userName, "App")
   // this.AuthService.update()
  }
}
