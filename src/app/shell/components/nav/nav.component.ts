import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {NavigationConfig, NavListComponent} from "../nav-list/nav-list.component";
import { NgOptimizedImage } from '@angular/common'
import {NavItemComponent} from "../nav-item/nav-item.component";
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, NavListComponent, NgOptimizedImage, NavItemComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() navigationConfig!:NavigationConfig[]
}
