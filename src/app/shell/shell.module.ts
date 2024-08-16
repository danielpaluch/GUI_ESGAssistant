import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../esg-lib/components/nav/nav.component';
import { HeaderComponent } from '../esg-lib/components/header/header.component';
import { AsyncPipe } from '@angular/common';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellContainerComponent } from './containers/shell-container/shell-container.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    AsyncPipe,
    ShellRoutingModule,
    MatProgressSpinner,
  ],
  declarations: [ShellContainerComponent],
})
export class ShellModule {}
