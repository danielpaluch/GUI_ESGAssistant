import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementContainerComponent } from './components/management-container/management-container.component';

@NgModule({
  declarations: [ManagementContainerComponent],
  imports: [CommonModule, ManagementRoutingModule],
})
export class ManagementModule {}
