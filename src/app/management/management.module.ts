import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementContainerComponent } from './components/management-container/management-container.component';
import {CardComponent} from "../esg-lib/components/card/card.component";

@NgModule({
  declarations: [ManagementContainerComponent],
    imports: [CommonModule, ManagementRoutingModule, CardComponent],
})
export class ManagementModule {}
