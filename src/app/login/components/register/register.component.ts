import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  filePath = '';

  constructor(public router: Router) {
    this.generateRandomNumber();
  }

  generateRandomNumber(): void {
    if (Math.floor(Math.random() * 2) === 1)
      this.filePath = 'assets/img/sign_up_img_1.png';
    else this.filePath = 'assets/img/sign_up_img_2.png';
  }
}
