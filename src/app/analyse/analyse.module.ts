import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseRoutingModule } from './analyse-routing.module';
import { AnalyseContainerComponent } from './components/analyse-container/analyse-container.component';

@NgModule({
  declarations: [AnalyseContainerComponent],
  imports: [CommonModule, AnalyseRoutingModule],
})
export class AnalyseModule {}
