import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseRoutingModule } from './analyse-routing.module';
import { AnalyseContainerComponent } from './components/analyse-container/analyse-container.component';
import { CardComponent } from '../esg-lib/components/card/card.component';

@NgModule({
  declarations: [AnalyseContainerComponent],
  imports: [CommonModule, AnalyseRoutingModule, CardComponent],
})
export class AnalyseModule {}
