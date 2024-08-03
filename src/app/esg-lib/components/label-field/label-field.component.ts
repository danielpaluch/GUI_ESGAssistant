import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-label-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './label-field.component.html',
  styleUrl: './label-field.component.scss'
})
export class LabelFieldComponent {

  @Input({required:true}) label: string;

}


