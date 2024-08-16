import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsContainerComponent } from './components/reports-container/reports-container.component';
import { CardComponent } from '../esg-lib/components/card/card.component';

@NgModule({
  declarations: [ReportsContainerComponent],
  imports: [CommonModule, ReportsRoutingModule, CardComponent],
})
export class ReportsModule {}
