import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementContainerComponent } from './components/management-container/management-container.component';
import { CardComponent } from '../esg-lib/components/card/card.component';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { MatDivider } from '@angular/material/divider';
import { DragDropContainerComponent } from '../esg-lib/components/drag-drop-container/drag-drop-container.component';

@NgModule({
  declarations: [ManagementContainerComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    CardComponent,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,
    MatDivider,
    DragDropContainerComponent,
  ],
})
export class ManagementModule {}
