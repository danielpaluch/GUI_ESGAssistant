import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import {MaterialModule} from "../material.module";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatInputModule
  ]
})
export class ShellModule { }
