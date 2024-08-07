import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewContainerComponent } from './components/overview-container/overview-container.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewContainerComponent],
  imports: [CommonModule, OverviewRoutingModule],
})
export class OverviewModule {}
