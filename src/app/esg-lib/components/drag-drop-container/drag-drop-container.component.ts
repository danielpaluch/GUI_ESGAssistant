import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-container',
  standalone: true,
  imports: [CdkDrag, CdkDropList],
  templateUrl: './drag-drop-container.component.html',
  styleUrl: './drag-drop-container.component.scss',
})
export class DragDropContainerComponent<T extends { name: string }> {
  @Input() label: string;

  @Input() items: T[];

  @Input() color = '';

  @Output() dropEvent: EventEmitter<CdkDragDrop<T[]>> = new EventEmitter<
    CdkDragDrop<T[]>
  >();

  drop(event: CdkDragDrop<T[]>) {
    this.dropEvent.emit(event);
  }
}
