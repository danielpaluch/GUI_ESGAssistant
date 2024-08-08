import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-form-field',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './select-form-field.component.html',
  styleUrl: './select-form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormFieldComponent<T> {
  @Input({ required: true }) formControl: FormControl<T | undefined | null>;

  @Input() label: string;

  @Input() options!: T[];

  @Input() displayWith: (option: T) => string | null = (
    option: T,
  ): string | null => {
    if (typeof option === 'string') {
      return option;
    }

    if (typeof option === 'object') {
      return JSON.stringify(option);
    }

    if (option && typeof option.toString === 'function') {
      return option.toString();
    }

    return null;
  };

  @Output() readonly valueChanges = new EventEmitter<T>();
}
