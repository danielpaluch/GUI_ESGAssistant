import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-form-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './text-form-field.component.html',
  styleUrl: './text-form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFormFieldComponent {
  @Input({ required: true }) formControl: FormControl<string | null>;

  @Input() label: string;
}
