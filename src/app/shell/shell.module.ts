import { NgModule } from '@angular/core';
import { TemplateComponent } from './components/template/template.component';
import { MaterialModule } from '../material.module';
import { EmissionFactorModule } from '../emission-factor/emission-factor.module';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import {AsyncPipe} from "@angular/common";

const MATERIAL_MODULES = [MaterialModule];

@NgModule({
  declarations: [TemplateComponent],
  exports: [TemplateComponent],
    imports: [MATERIAL_MODULES, EmissionFactorModule, RouterOutlet, NavComponent, HeaderComponent, AsyncPipe],
})
export class ShellModule {}
