import { Company, CompanyCreateData } from '../models/company.model';
import { HttpErrorResponse } from '@angular/common/http';

const COMPANY_ACTIONS = '[Company]';

export class CompanyActionGet {
  static readonly type = `${COMPANY_ACTIONS} Get`;
}
export class CompanyActionGetSuccess {
  static readonly type = `${COMPANY_ACTIONS} Get Success`;
  constructor(public payload: Company) {}
}

export class CompanyActionGetFailure {
  static readonly type = `${COMPANY_ACTIONS} Get Failure`;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export class CompanyActionCreate {
  static readonly type = `${COMPANY_ACTIONS} Create`;
  constructor(public payload: CompanyCreateData) {}
}

export class CompanyActionCreateSuccess {
  static readonly type = `${COMPANY_ACTIONS} Create success`;
  constructor(public payload: Company) {}
}

export class CompanyActionCreateFailure {
  static readonly type = `${COMPANY_ACTIONS} Create failure`;
  constructor(public payload: { error: unknown }) {}
}

export class CompanyActionUpdate {
  static readonly type = `${COMPANY_ACTIONS} Update`;
  constructor(public payload: { id: string; item: Partial<Company> }) {}
}

export class CompanyActionUpdateSuccess {
  static readonly type = `${COMPANY_ACTIONS} Update success`;
  constructor(public payload: Company) {}
}

export class CompanyActionUpdateFailure {
  static readonly type = `${COMPANY_ACTIONS} Update failure`;
  constructor(public payload: { error: unknown }) {}
}
