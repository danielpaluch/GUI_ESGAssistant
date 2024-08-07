import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './components/landing-container/landing-container.component';
import { LandingRouterModule } from './landing-router.module';
import { LeftMenuComponent } from '../esg-lib/components/left-menu/left-menu.component';
import { LabelFieldComponent } from '../esg-lib/components/label-field/label-field.component';
import { TextFormFieldComponent } from '../esg-lib/components/text-form-field/text-form-field.component';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [LandingContainerComponent],
  imports: [
    CommonModule,
    LandingRouterModule,
    LeftMenuComponent,
    LabelFieldComponent,
    TextFormFieldComponent,
    MatButton,
    MatLabel,
    MatFormField,
  ],
})
export class LandingModule {}
