import { Component } from '@angular/core';
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
  navigationConfig = navigationConfig
}


export const navigationConfig:NavigationConfig[] = [
  {
    route:'',
    icon:'home',
    title:'Overview'
  },
  {
    route:'',
    icon:'folder',
    title:'ESG'
  },
  {
    route:'',
    icon:'list_alt',
    title:'Reports'
  },
  {
    route:'',
    icon:'supervisor_account',
    title:'Management'
  },
  {
    route:'',
    icon:'settings',
    title:'Settings'
  },
  {
    route:'',
    icon:'assessment',
    title:'Analyze'
  },
]

export interface NavigationConfig {
  route: string,
  icon: string;
  title: string
}

