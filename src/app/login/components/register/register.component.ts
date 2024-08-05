import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
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
