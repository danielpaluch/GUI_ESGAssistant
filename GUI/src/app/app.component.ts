import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GUI';

  constructor(private http: HttpClient){}

  request(){
    this.http.get('/api/test').subscribe((response) => {
      console.log('answer from server by proxy:', response);
    });
  }
}
