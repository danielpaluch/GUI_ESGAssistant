import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface EmissionFirstStepControls {
  alias: FormControl<string | null>;
  description: FormControl<string | null>;
}

export class EmissionFirstStepGroup extends FormGroup<EmissionFirstStepControls> {
  constructor() {
    super({
      alias: new FormControl<string>(''),
      description: new FormControl<string | null>(null, [Validators.required]),
    });
  }
}
