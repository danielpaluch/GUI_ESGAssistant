import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { MaterialModule } from '../material.module';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './main/main.component';
import { EmissionFactorModule } from '../emission-factor/emission-factor.module';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";

const MATERIAL_MODULES = [MaterialModule];

@NgModule({
  declarations: [TemplateComponent, MainComponent, TestComponent],
  exports: [TemplateComponent],
  imports: [MATERIAL_MODULES, EmissionFactorModule, RouterOutlet, NavComponent, HeaderComponent],
})
export class ShellModule {}
