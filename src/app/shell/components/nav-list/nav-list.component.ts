import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {NavItemComponent} from "../nav-item/nav-item.component";

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, NavItemComponent],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {
  @Input() navigationConfig!:NavigationConfig[]
}


export const navigationConfig:NavigationConfig[] = [
  {
    route:'/overview',
    icon:'home',
    title:'Overview'
  },
  {
    route:'/esg',
    icon:'folder',
    title:'ESG'
  },
  {
    route:'/reports',
    icon:'list_alt',
    title:'Reports'
  },
  {
    route:'/management',
    icon:'supervisor_account',
    title:'Management'
  },
  {
    route:'/settings',
    icon:'settings',
    title:'Settings'
  },
  {
    route:'/analyze',
    icon:'assessment',
    title:'Analyze'
  },
]

export interface NavigationConfig {
  route: string,
  icon: string;
  title: string
}

