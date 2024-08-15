import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [
    CardComponent,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.scss',
})
export class DialogConfirmComponent {
  @Input()
  title = 'Are you sure?';

  @Input()
  contentTitle = 'This process is irreversible';

  @Input()
  confirmButtonLabel = 'Confirm';

  @Input()
  loading = false;

  @Output()
  readonly confirm: EventEmitter<void> = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }
}
