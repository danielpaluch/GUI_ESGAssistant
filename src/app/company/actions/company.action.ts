import { HttpErrorResponse } from '@angular/common/http';

export class FetchCompany {
  static readonly type = '[Company] Fetch company';
}
export class FetchCompanySuccess {
  static readonly type = '[Company] Fetch company';
}
export class FetchCompanyFailure {
  static readonly type = '[Company] Fetch company';

  constructor(public payload: { error: HttpErrorResponse }) {}
}
