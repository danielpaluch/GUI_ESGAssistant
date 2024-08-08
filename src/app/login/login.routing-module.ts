import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {CommonModule} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

const MATERIAL_MODULES = [
  CommonModule,
  MatFormField,
  MatButton,
  MatInput,
  MatCheckbox
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MATERIAL_MODULES
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
