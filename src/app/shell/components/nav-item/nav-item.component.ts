import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() route: string = '';
}
