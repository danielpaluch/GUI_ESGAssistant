import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { MaterialModule } from '../material.module';
import { MatInputModule } from '@angular/material/input';
import { EsgLibModule } from '../esg-lib/esg-lib.module';
import { MainComponent } from './main/main.component';
import { EmissionFactorModule } from '../emission-factor/emission-factor.module';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

const MATERIAL_MODULES = [MaterialModule];

@NgModule({
  declarations: [TemplateComponent, MainComponent, TestComponent],
  exports: [TemplateComponent],
  imports: [MATERIAL_MODULES, EsgLibModule, EmissionFactorModule, RouterOutlet],
})
export class ShellModule {}
