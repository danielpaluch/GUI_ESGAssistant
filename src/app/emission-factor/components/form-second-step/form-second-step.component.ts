import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFormFieldComponent } from '../../../esg-lib/components/text-form-field/text-form-field.component';
import { SelectFormFieldComponent } from '../../../esg-lib/components/select-form-field/select-form-field.component';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NumberFormFieldComponent } from '../../../esg-lib/components/number-form-field/number-form-field.component';
import { EmissionFormTableComponent } from '../emission-form-table/emission-form-table.component';
import { MatButton } from '@angular/material/button';
import { MatStepperNext } from '@angular/material/stepper';
import { EmissionFormModel } from '../../models/emission-form.model';
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
export class FormSecondStepComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  private _typeOptions = new BehaviorSubject<TypeConfig[]>(formConfig.types);
  private _categoryOptions = new BehaviorSubject<CategoryConfig[]>([]);
  private _fuelOptions = new BehaviorSubject<FuelConfig[]>([]);
  private _unitOptions = new BehaviorSubject<UnitConfig[]>([]);

  public typeOptions$: Observable<TypeConfig[]> =
    this._typeOptions.asObservable();
  public categoryOptions$: Observable<CategoryConfig[]> =
    this._categoryOptions.asObservable();
  public fuelOptions$: Observable<FuelConfig[]> =
    this._fuelOptions.asObservable();
  public unitOptions$: Observable<UnitConfig[]> =
    this._unitOptions.asObservable();

  @Input({ required: true }) secondStepForm: EmissionSecondStepGroup;

  @Input({ required: true }) thirdStepForm: EmissionThirdStepGroup;

  ngOnInit() {
    this.secondStepForm.controls.type.valueChanges.subscribe((newType) => {
      this._categoryOptions.next(newType ? newType.categories : []);
      this._fuelOptions.next([]);
      this._unitOptions.next(newType ? newType.units : []);

      this.categoryControl.reset();
      this.fuelControl.reset();
      this.unitControl.reset();
    });

    this.categoryControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: CategoryConfig | null) => {
        this._fuelOptions.next(value ? value.fuels : []);
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

  public addEmission(emission: Partial<EmissionFormModel>) {
    this.thirdStepForm.addNewEmission(emission);
    this.secondStepForm.reset();
  }

  public deleteEmission(index: number) {
    this.thirdStepForm.removeEmissionByIndex(index);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
