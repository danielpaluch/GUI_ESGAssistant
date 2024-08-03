import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-label-field',
  standalone: true,
  templateUrl: './label-field.component.html',
  styleUrl: './label-field.component.scss'
})
export class LabelFieldComponent {

  @Input({required:true}) label: string;

}


