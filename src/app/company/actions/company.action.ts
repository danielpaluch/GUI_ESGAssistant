import { Company } from '../models/company.model';
export namespace CompanyActions {
  export class FetchCompany {
    static readonly type = '[Company] Fetch company';
  }

  export class CreateCompany {
    static readonly type = '[Company] Create company';

    //TODO
    // constructor(public payload: CompanyCreateData ) {}

    constructor(public payload: { data: Company }) {}
  }

  export class UpdateCompany {
    static readonly type = '[Company] Update company';
    constructor(public payload: { id: string; data: Partial<Company> }) {}
  }

  export class DeleteCompany {
    static readonly type = '[Company] Delete company';
    constructor(public payload: { id: string }) {}
  }
}
