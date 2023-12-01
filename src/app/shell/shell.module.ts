import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ShellRoutingModule } from './shell-routing.module';

const MATERIAL_MODULES = [MaterialModule];

@NgModule({
  declarations: [MainComponent, TestComponent],
  exports: [],
  imports: [MATERIAL_MODULES, ShellRoutingModule, RouterOutlet],
})
export class ShellModule {}
