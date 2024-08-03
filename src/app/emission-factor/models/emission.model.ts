export interface EmissionModel {
  emissionType: EmissionType ;
  emissionAttributes: EmissionAttributes;
}
export interface EmissionType {
  name: EmissionNameEnum
}

export enum EmissionNameEnum {
  'FUEL'= 'fuel',
  'WTT_FUEL' = 'wtt_fuel',
  'ELECTRIC_ENERGY' = 'electric_energy',
  'WATER' = 'water',
  'MATERIAL_PURCHASE' = 'material_purchase',
  'WASTE_DISPOSAL'= 'waste_disposal',
  'VEHICLES' = 'vehicles',
  'EXTERNAL_TRANSPORT_GOODS' = 'external_transport_goods',
  'EXTERNAL_TRANSPORT_EMPLOYEES' = 'external_transport_employees',
  'REFRIGERANTS' = 'refrigerants'
}

export type EmissionAttributes =
  FuelAttributes |
  WttFuelAttributes |
  ElectricEnergyAttributes |
  WaterAttributes |
  MaterialPurchaseAttributes |
  WasteDisposalAttributes |
  VehiclesAttributes |
  ExternalTransportGoodsAttributes |
  ExternalTransportEmployeesAttributes |
  RefrigerantsAttributes;

export interface FuelAttributes {
  octaneNumber: number;
  fuelType: string;
}

export interface WttFuelAttributes {
  resourceSource: string;
  extractionMethod: string;
}

export interface Fuels {
  group:
    'gas'|
    'liquid fuel'|
    'solid fuel'|
    'biofuel'|
    'biomass'|
    'biogas'
  fuel: 'CNG'|
    'LNG'|
    'LPG'|
    'natural gas'|
    'other gases'|
    'aviation fuel'|
    'aviation fuel (piston engines)'|
    'jet fuel (jet engines)'|
    'diesel'|
    'diesel (biofuel mix)'|
    'gasoline'|
    'gasoline (biofuel mix)'|
    'fuel oil'|
    'kerosene'|
    'waste oils'|
    'marine diesel'|
    'marine fuel oil'|
    'coal (industrial logs)'|
    'coal (power generation)'|
    'coking coal'|
    'petroleum coke'|
    'bioethanol'|
    'biodiesel'|
    'wood'|
    'wood shavings'|
    'wood pellets'|
    'grass/straw'|
    'biogas'|
    'landfill gas'

}

export interface Metrics {
  metric : 'liter'|
  'm3'|
  'ton'|
  'kg'|
  'mWh'|
  'km'|
  'tkm'|
  'paskm'
}


export interface ElectricEnergyAttributes {
  voltage: number;
  energyType: string;
}

export interface WaterAttributes {
  volume: number;
  state: 'liquid' | 'solid' | 'gas';
}

export interface MaterialPurchaseAttributes {
  materialType: string;
  quantity: number;
}

export interface WasteDisposalAttributes {
  wasteType: string;
  disposalMethod: string;
}

export interface VehiclesAttributes {
  vehicleType: string;
  fuelType: string;
}

export interface ExternalTransportGoodsAttributes {
  vehicleType: string;
  distance: number;
}

export interface ExternalTransportEmployeesAttributes {
  vehicleType: string;
  numberOfEmployees: number;
}

export interface RefrigerantsAttributes {
  refrigerantType: string;
  volume: number;
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
