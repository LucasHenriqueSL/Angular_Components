import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Lucas';

  UserData = {
    email: 'lucas@gmail.com',
    role: 'admin',
  };

  title = 'Curso-Angular';
}
