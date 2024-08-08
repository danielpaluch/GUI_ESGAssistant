import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsContainerComponent } from './components/settings-container/settings-container.component';
import { CardComponent } from '../esg-lib/components/card/card.component';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [CommonModule, SettingsRoutingModule, CardComponent],
})
export class SettingsModule {}
