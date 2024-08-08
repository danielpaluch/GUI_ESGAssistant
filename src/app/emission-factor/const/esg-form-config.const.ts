import { TypeConfig } from '../models/emission.model';

export const formConfig: { types: TypeConfig[] } = {
  types: [
    {
      label: 'Fuels',
      value: 'fuels',
      categories: [
        {
          label: 'Gas fuel',
          value: 'gas_fuel',
          fuels: [
            { label: 'CNG', value: 'cng' },
            { label: 'LNG', value: 'lng' },
            { label: 'LPG', value: 'lpg' },
            { label: 'Natural gas', value: 'natural_gas' },
            { label: 'Petrochemical gases', value: 'petrochemical_gases' },
          ],
        },
        {
          label: 'Liquid fuel',
          value: 'liquid_fuel',
          fuels: [
            {
              label: 'Jet fuel (piston engines)',
              value: 'jet_fuel_piston_engines',
            },
            { label: 'Jet fuel', value: 'jet_fuel' },
            { label: 'Diesel (mix biofuel)', value: 'diesel_mix_biofuel' },
            { label: 'Diesel', value: 'diesel' },
            { label: 'Heating oil', value: 'heating_oil' },
            { label: 'Kerosene', value: 'kerosene' },
            { label: 'Gasoline (mix biofuel)', value: 'gasoline_mix_biofuel' },
            { label: 'Gasoline', value: 'gasoline' },
            { label: 'Waste fuel', value: 'waste_fuel' },
            { label: 'Marine diesel', value: 'marine_diesel' },
            { label: 'Marine fuel oil', value: 'marine_fuel_oil' },
          ],
        },
        {
          label: 'Constant fuel',
          value: 'constant_fuel',
          fuels: [
            {
              label: 'Coal (industrial boilers)',
              value: 'coal_industrial_boilers',
            },
            {
              label: 'Coal (electric generation)',
              value: 'coal_electric_generation',
            },
            { label: 'Coal', value: 'coal' },
            { label: 'Coking coal', value: 'coking_coal' },
            { label: 'Petroleum coke', value: 'petroleum_coke' },
          ],
        },
        {
          label: 'Biofuel',
          value: 'biofuel',
          fuels: [
            { label: 'Bioethanol', value: 'bioethanol' },
            { label: 'Biodiesel', value: 'biodiesel' },
          ],
        },
        {
          label: 'Biogas',
          value: 'biogas',
          fuels: [
            { label: 'Biogas', value: 'biogas' },
            { label: 'Landfill gas', value: 'landfill_gas' },
          ],
        },
      ],
      amount: {
        label: 'Amount',
        value: 'amount',
      },
      units: [
        {
          label: 'Liter',
          value: 'liter',
        },
        {
          label: 'Ton',
          value: 'ton',
        },
        {
          label: 'm3',
          value: 'm3',
        },
      ],
    },
    {
      label: 'Liquids',
      value: 'fuels',
      categories: [
        {
          label: 'Gas fuel',
          value: 'gas_fuel',
          fuels: [
            { label: 'CNG', value: 'cng' },
            { label: 'LNG', value: 'lng' },
            { label: 'LPG', value: 'lpg' },
            { label: 'Natural gas', value: 'natural_gas' },
            { label: 'Petrochemical gases', value: 'petrochemical_gases' },
          ],
        },
        {
          label: 'Liquid fuel',
          value: 'liquid_fuel',
          fuels: [
            {
              label: 'Jet fuel (piston engines)',
              value: 'jet_fuel_piston_engines',
            },
            { label: 'Jet fuel', value: 'jet_fuel' },
            { label: 'Diesel (mix biofuel)', value: 'diesel_mix_biofuel' },
            { label: 'Diesel', value: 'diesel' },
            { label: 'Heating oil', value: 'heating_oil' },
            { label: 'Kerosene', value: 'kerosene' },
            { label: 'Gasoline (mix biofuel)', value: 'gasoline_mix_biofuel' },
            { label: 'Gasoline', value: 'gasoline' },
            { label: 'Waste fuel', value: 'waste_fuel' },
            { label: 'Marine diesel', value: 'marine_diesel' },
            { label: 'Marine fuel oil', value: 'marine_fuel_oil' },
          ],
        },
        {
          label: 'Constant fuel',
          value: 'constant_fuel',
          fuels: [
            {
              label: 'Coal (industrial boilers)',
              value: 'coal_industrial_boilers',
            },
            {
              label: 'Coal (electric generation)',
              value: 'coal_electric_generation',
            },
            { label: 'Coal', value: 'coal' },
            { label: 'Coking coal', value: 'coking_coal' },
            { label: 'Petroleum coke', value: 'petroleum_coke' },
          ],
        },
        {
          label: 'Biofuel',
          value: 'biofuel',
          fuels: [
            { label: 'Bioethanol', value: 'bioethanol' },
            { label: 'Biodiesel', value: 'biodiesel' },
          ],
        },
        {
          label: 'Biogas',
          value: 'biogas',
          fuels: [
            { label: 'Biogas', value: 'biogas' },
            { label: 'Landfill gas', value: 'landfill_gas' },
          ],
        },
      ],
      amount: {
        label: 'Amount',
        value: 'amount',
      },
      units: [
        {
          label: 'Liter',
          value: 'liter',
        },
        {
          label: 'Ton',
          value: 'ton',
        },
        {
          label: 'm3',
          value: 'm3',
        },
      ],
    },
  ],
};
