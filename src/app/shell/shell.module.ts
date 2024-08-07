import { NgModule } from '@angular/core';
import { TemplateComponent } from './containers/template/template.component';
import { MaterialModule } from '../material.module';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { AsyncPipe } from '@angular/common';
import { ShellRoutingModule } from './shell-routing.module';

const MATERIAL_MODULES = [MaterialModule];

@NgModule({
  declarations: [TemplateComponent],
  exports: [TemplateComponent],
  imports: [
    MATERIAL_MODULES,
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    AsyncPipe,
    ShellRoutingModule,
  ],
})
export class ShellModule {}
