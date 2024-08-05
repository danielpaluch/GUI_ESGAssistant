import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GUI';
  isUserLogged: boolean = false;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.isUserLogged().subscribe((response) => {
      this.isUserLogged = response;
      if (!this.isUserLogged) {
        this.router.navigate(['/login']);
      }
    });
  }

  request() {
    this.http.get('/api/test').subscribe((response) => {
      console.log('answer from server by proxy:', response);
    });
  }
}
