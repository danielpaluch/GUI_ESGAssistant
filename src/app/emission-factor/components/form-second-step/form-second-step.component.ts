import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFormFieldComponent } from '../../../esg-lib/components/text-form-field/text-form-field.component';
import { SelectFormFieldComponent } from '../../../esg-lib/components/select-form-field/select-form-field.component';
import { AsyncPipe } from '@angular/common';
import { NumberFormFieldComponent } from '../../../esg-lib/components/number-form-field/number-form-field.component';
import { EmissionFormTableComponent } from '../emission-form-table/emission-form-table.component';
import { MatButton } from '@angular/material/button';
import { MatStepperNext } from '@angular/material/stepper';
import { EmissionSecondStepGroup } from '../../forms/emission-second-step.form';
import { EmissionThirdStepGroup } from '../../forms/emission-third-step.form';
import { LabelFieldComponent } from '../../../esg-lib/components/label-field/label-field.component';
import { formConfig } from '../../const/esg-form-config.const';
import {
  CategoryConfig,
  FuelConfig,
  TypeConfig,
  UnitConfig,
} from '../../models/emission.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form-second-step',
  standalone: true,
  imports: [
    TextFormFieldComponent,
    SelectFormFieldComponent,
    MatFormFieldModule,
    AsyncPipe,
    NumberFormFieldComponent,
    EmissionFormTableComponent,
    MatButton,
    MatStepperNext,
    LabelFieldComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-second-step.component.html',
  styleUrl: './form-second-step.component.scss',
})
export class FormSecondStepComponent implements OnInit {
  @Input({ required: true }) secondStepForm: EmissionSecondStepGroup;

  @Input({ required: true }) thirdStepForm: EmissionThirdStepGroup;

  public readonly $typeOptions: WritableSignal<TypeConfig[]> = signal<
    TypeConfig[]
  >(formConfig.types);
  public readonly $categoryOptions: WritableSignal<CategoryConfig[]> = signal<
    CategoryConfig[]
  >([]);
  public readonly $fuelOptions: WritableSignal<FuelConfig[]> = signal<
    FuelConfig[]
  >([]);
  public readonly $unitOptions: WritableSignal<UnitConfig[]> = signal<
    UnitConfig[]
  >([]);

  constructor(private readonly destroyRef: DestroyRef) {}

  ngOnInit() {
    this.secondStepForm.controls.type.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((newType: TypeConfig | null) => {
        if (newType) {
          this.$categoryOptions.set(newType.categories);
          this.$fuelOptions.set([]);
          this.$unitOptions.set(newType.units);
        }
        this.categoryControl.reset();
        this.fuelControl.reset();
        this.unitControl.reset();
      });

    this.categoryControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((category: CategoryConfig | null) => {
        if (category) {
          this.$fuelOptions.set(category.fuels);
        }
        this.fuelControl.reset();
      });
  }

  public get typeControl(): FormControl<TypeConfig | null> {
    return this.secondStepForm.controls.type;
  }

  public get categoryControl(): FormControl<CategoryConfig | null> {
    return this.secondStepForm.controls.category;
  }

  public get fuelControl(): FormControl<FuelConfig | null> {
    return this.secondStepForm.controls.fuel;
  }

  public get amountControl(): FormControl<number | null> {
    return this.secondStepForm.controls.amount;
  }

  public get unitControl(): FormControl<UnitConfig | null> {
    return this.secondStepForm.controls.unit;
  }

  public label(
    type: TypeConfig | FuelConfig | CategoryConfig | UnitConfig,
  ): string {
    return type.label;
  }

  public addEmission() {
    this.thirdStepForm.addNewEmission(
      this.secondStepForm.emissionSecondStepValues,
    );
    this.secondStepForm.reset();
  }

  public deleteEmission(index: number) {
    this.thirdStepForm.removeEmissionByIndex(index);
  }
}
