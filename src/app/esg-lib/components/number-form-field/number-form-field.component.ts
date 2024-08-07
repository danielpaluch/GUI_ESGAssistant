import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-number-form-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './number-form-field.component.html',
  styleUrl: './number-form-field.component.scss',
})
export class NumberFormFieldComponent {
  @Input({ required: true }) formControl: FormControl<number | null>;

  @Input() label!: string;
}
