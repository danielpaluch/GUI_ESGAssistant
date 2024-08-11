import { HttpErrorResponse } from '@angular/common/http';

export class FetchEmployees {
  static readonly type = '[Employee] Fetch employees';
}
export class FetchEmployeesSuccess {
  static readonly type = '[Company] Fetch employees success!';
}
export class FetchEmployeesFailure {
  static readonly type = '[Company] Fetch employees failure!';

  constructor(public payload: { error: HttpErrorResponse }) {}
}
