import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { EmissionSecondStepGroup} from "../add-emission-factor/add-emission-factor.component";
import {FormControl} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TextFormFieldComponent} from "../../../esg-lib/components/text-form-field/text-form-field.component";
import {SelectFormFieldComponent} from "../../../esg-lib/components/select-form-field/select-form-field.component";
import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {NumberFormFieldComponent} from "../../../esg-lib/components/number-form-field/number-form-field.component";

@Component({
  selector: 'app-form-second-step',
  standalone: true,
  imports: [
    TextFormFieldComponent,
    SelectFormFieldComponent,
    MatFormFieldModule,
    AsyncPipe,
    NumberFormFieldComponent
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


  @Input() form!:EmissionSecondStepGroup;


  ngOnInit() {
    this.form.type.valueChanges.subscribe(
      (newType)=>{
        console.log(newType)
        this._categoryOptions.next(newType ? newType.categories : []);
        this._fuelOptions.next([]);
        this._unitOptions.next(newType ? newType.units: [])


        this.categoryControl.reset();
        this.fuelControl.reset();
        this.unitControl.reset();
      }
    )

    this.categoryControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value:CategoryConfig|undefined) => {

      this._fuelOptions.next(value ? value.fuels : []);
      this.fuelControl.reset();
    });
  }

  get typeControl():FormControl<TypeConfig|undefined>{
    return this.form.type
  }

  get categoryControl():FormControl<CategoryConfig|undefined>{
    return this.form.category
  }

  get fuelControl():FormControl<FuelConfig|undefined>{
    return this.form.fuel
  }

  get amountControl():FormControl<number>{
    return this.form.amount
  }

  get unitControl():FormControl<UnitConfig|undefined>{
    return this.form.unit
  }

  typeLabel(type:TypeConfig):string{
    return type.label
  }

  fuelLabel(type:FuelConfig):string{
    return type.label
  }

  categoryLabel(type:CategoryConfig):string{
    return type.label
  }

  unitLabel(type:UnitConfig):string{
    return type.label
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
