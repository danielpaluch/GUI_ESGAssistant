import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TextFormFieldComponent} from "../../../esg-lib/components/text-form-field/text-form-field.component";
import {SelectFormFieldComponent} from "../../../esg-lib/components/select-form-field/select-form-field.component";
import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {NumberFormFieldComponent} from "../../../esg-lib/components/number-form-field/number-form-field.component";
import {EmissionFormTableComponent} from "../emission-form-table/emission-form-table.component";
import {MatButton} from "@angular/material/button";
import {MatStepperNext} from "@angular/material/stepper";
import {EmissionFormModel} from "../../models/emission-form.model";
import {EmissionSecondStepGroup} from "../../forms/emission-second-step.form";
import {EmissionThirdStepGroup} from "../../forms/emission-third-step.form";
import {LabelFieldComponent} from "../../../esg-lib/components/label-field/label-field.component";

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
    LabelFieldComponent
  ],
  templateUrl: './form-second-step.component.html',
  styleUrl: './form-second-step.component.scss'
})
export class FormSecondStepComponent implements OnInit,OnDestroy{

  private readonly destroy$ = new Subject<void>();

  private _typeOptions = new BehaviorSubject<TypeConfig[]>(formConfig.types);
  private _categoryOptions = new BehaviorSubject<CategoryConfig[]>([]);
  private _fuelOptions = new BehaviorSubject<FuelConfig[]>([]);
  private _unitOptions = new BehaviorSubject<UnitConfig[]>([]);


  public typeOptions$: Observable<TypeConfig[]> = this._typeOptions.asObservable();
  public categoryOptions$: Observable<CategoryConfig[]> = this._categoryOptions.asObservable();
  public fuelOptions$: Observable<FuelConfig[]> = this._fuelOptions.asObservable();
  public unitOptions$: Observable<UnitConfig[]> = this._unitOptions.asObservable();


  @Input({required: true}) secondStepForm: EmissionSecondStepGroup;

  @Input({required: true}) thirdStepForm: EmissionThirdStepGroup;


  ngOnInit() {
    this.secondStepForm.controls.type.valueChanges.subscribe(
      (newType)=>{
        this._categoryOptions.next(newType ? newType.categories : []);
        this._fuelOptions.next([]);
        this._unitOptions.next(newType ? newType.units: [])


        this.categoryControl.reset();
        this.fuelControl.reset();
        this.unitControl.reset();
      }
    )

    this.categoryControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value:CategoryConfig|null) => {

      this._fuelOptions.next(value ? value.fuels : []);
      this.fuelControl.reset();
    });
  }

  public get typeControl():FormControl<TypeConfig|null>{
    return this.secondStepForm.controls.type
  }

  public get categoryControl():FormControl<CategoryConfig|null>{
    return this.secondStepForm.controls.category
  }

  public get fuelControl():FormControl<FuelConfig|null>{
    return this.secondStepForm.controls.fuel
  }

  public get amountControl():FormControl<number|null>{
    return this.secondStepForm.controls.amount
  }

  public get unitControl():FormControl<UnitConfig|null>{
    return this.secondStepForm.controls.unit
  }

  public label(type: TypeConfig | FuelConfig | CategoryConfig | UnitConfig ):string {
    return type.label
  }

  public addEmission(emission: Partial<EmissionFormModel>){
    this.thirdStepForm.addNewEmission(emission)
    this.secondStepForm.reset()
  }

  public deleteEmission(index: number){
    this.thirdStepForm.removeEmissionByIndex(index)
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface FuelConfig extends Entity{
}

export interface CategoryConfig extends Entity{
  fuels: FuelConfig[];
}

export interface TypeConfig extends Entity{
  categories: CategoryConfig[];
  amount: AmountConfig;
  units: UnitConfig[];
}

export interface AmountConfig extends Entity { }

export interface UnitConfig extends Entity { }

export interface Entity{
  label: string;
  value: string;
}

export type FieldType = SelectField | 'text' | 'number'

export interface SelectField {
  type: FormFieldSelectJSON.SELECT
  options: Entity[]
}

export enum FormFieldSelectJSON{
  SELECT = 'select',
  TEXT = 'text',
  NUMBER = 'number'
}

export const formConfig: { types: TypeConfig[] } = {
  'types':[
    {
      'label':'Fuels',
      'value':'fuels',
      'categories':[
        {
          'label': 'Gas fuel',
          'value': 'gas_fuel',
          'fuels': [
            { 'label': 'CNG', 'value': 'cng' },
            { 'label': 'LNG', 'value': 'lng' },
            { 'label': 'LPG', 'value': 'lpg' },
            { 'label': 'Natural gas', 'value': 'natural_gas' },
            { 'label': 'Petrochemical gases', 'value': 'petrochemical_gases' },
          ]
        },
        {
          'label': 'Liquid fuel',
          'value': 'liquid_fuel',
          'fuels': [
            { 'label': 'Jet fuel (piston engines)', 'value': 'jet_fuel_piston_engines' },
            { 'label': 'Jet fuel', 'value': 'jet_fuel' },
            { 'label': 'Diesel (mix biofuel)', 'value': 'diesel_mix_biofuel' },
            { 'label': 'Diesel', 'value': 'diesel' },
            { 'label': 'Heating oil', 'value': 'heating_oil' },
            { 'label': 'Kerosene', 'value': 'kerosene' },
            { 'label': 'Gasoline (mix biofuel)', 'value': 'gasoline_mix_biofuel' },
            { 'label': 'Gasoline', 'value': 'gasoline' },
            { 'label': 'Waste fuel', 'value': 'waste_fuel' },
            { 'label': 'Marine diesel', 'value': 'marine_diesel' },
            { 'label': 'Marine fuel oil', 'value': 'marine_fuel_oil' },
          ]
        },
        {
          'label': 'Constant fuel',
          'value': 'constant_fuel',
          'fuels': [
            { 'label': 'Coal (industrial boilers)', 'value': 'coal_industrial_boilers' },
            { 'label': 'Coal (electric generation)', 'value': 'coal_electric_generation' },
            { 'label': 'Coal', 'value': 'coal' },
            { 'label': 'Coking coal', 'value': 'coking_coal' },
            { 'label': 'Petroleum coke', 'value': 'petroleum_coke' },
          ]
        },
        {
          'label': 'Biofuel',
          'value': 'biofuel',
          'fuels': [
            { 'label': 'Bioethanol', 'value': 'bioethanol' },
            { 'label': 'Biodiesel', 'value': 'biodiesel' },
          ]
        },
        {
          'label': 'Biogas',
          'value': 'biogas',
          'fuels': [
            { 'label': 'Biogas', 'value': 'biogas' },
            { 'label': 'Landfill gas', 'value': 'landfill_gas' },
          ]
        },
      ],
      'amount':{
        'label': 'Amount',
        'value': 'amount'
      },
      'units':[
        {
          'label': 'Liter',
          'value': 'liter'
        },
        {
          'label': 'Ton',
          'value': 'ton'
        },
        {
          'label': 'm3',
          'value': 'm3'
        }
      ]

    }
  ]

}
