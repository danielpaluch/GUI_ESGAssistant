import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrl: './landing-container.component.scss',
})
export class LandingContainerComponent {
  companyControl: FormControl<string | null> = new FormControl<string | null>(
    null,
    [Validators.required],
  );

  store: Store = inject(Store);

  addCompany() {
    // const companyName: string | null= this.companyControl.value
    // if(companyName){
    //   const companyCreateData: CompanyCreateData = {
    //     name: companyName,
    //   }
    //   this.store.dispatch(new CompanyActions.CreateCompany(companyCreateData))
    //
    // }
  }
}
