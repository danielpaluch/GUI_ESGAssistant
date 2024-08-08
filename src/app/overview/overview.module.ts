import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewContainerComponent } from './components/overview-container/overview-container.component';
import { OverviewRoutingModule } from './overview-routing.module';
import {CardComponent} from "../esg-lib/components/card/card.component";

@NgModule({
  declarations: [OverviewContainerComponent],
    imports: [CommonModule, OverviewRoutingModule, CardComponent],
})
export class OverviewModule {}
