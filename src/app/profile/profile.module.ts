import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CardComponent } from '../esg-lib/components/card/card.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { CurrentPlanInfoComponent } from './components/current-plan-info/current-plan-info.component';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProfileContainerComponent,
    CompanyInfoComponent,
    CurrentPlanInfoComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardComponent,
    NgOptimizedImage,
    MatDivider,
    MatIcon,
  ],
})
export class ProfileModule {}
