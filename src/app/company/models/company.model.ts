import { BaseStateModel } from '../../shell/models/base-service.model';

export interface Company {
  id: string;
  name: string;
  activated: boolean;
  plan: string;
  startDate: Date;
  expireDate: Date;
  description: string;
  logo: null | string;
}

export interface CompanyCreateData {
  name: string;
}

export interface CompanyStateModel extends BaseStateModel<Company> {}
