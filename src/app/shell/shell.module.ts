import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../esg-lib/components/nav/nav.component';
import { HeaderComponent } from '../esg-lib/components/header/header.component';
import { AsyncPipe } from '@angular/common';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    AsyncPipe,
    ShellRoutingModule,
  ],
})
export class ShellModule {}
