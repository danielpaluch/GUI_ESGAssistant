import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  filePath: string = '';

  constructor(public router: Router) {
    this.generateRandomNumber();
  }

  generateRandomNumber(): void {
    if (Math.floor(Math.random() * 2) === 1)
      this.filePath = 'assets/img/sign_up_img_1.png';
    else this.filePath = 'assets/img/sign_up_img_2.png';
  }
}
