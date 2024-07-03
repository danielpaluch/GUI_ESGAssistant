import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorNumber = -1;
        let customErrorMessage = 'Unknown error';

        // Delete before publication
        console.log(error.error);

        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          customErrorMessage = 'An error occurred:' + error.error.message;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorNumber = error.error.errorNumber || errorNumber;
          customErrorMessage = error.error.message;
        }

        const customError = new CustomError(
          error.status,
          customErrorMessage,
          error.error,
          errorNumber
        );
        return throwError(customError);
      })
    );
  }
}

export class CustomError extends Error {
  constructor(
    public status: number,
    public override message: string,
    public originalError: HttpErrorResponse,
    public errorNumber: number
  ) {
    super(message);
    this.name = 'CustomErrorHandler';
    this.status = status;
    this.originalError = originalError;
    this.errorNumber = errorNumber;
  }
}
