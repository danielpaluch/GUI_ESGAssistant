import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorNumber = -1;
        let customErrorMessage = 'Unknown error';

        if (error.error instanceof ErrorEvent) {
          customErrorMessage = 'An error occurred:' + error.error.message;
        } else {
          errorNumber = error.error.errorNumber || errorNumber;
          customErrorMessage = error.error.message;
        }

        const customError = new CustomError(
          error.status,
          customErrorMessage,
          error.error,
          errorNumber,
        );
        return throwError(customError);
      }),
    );
  }
}

export class CustomError extends Error {
  constructor(
    public status: number,
    public override message: string,
    public originalError: HttpErrorResponse,
    public errorNumber: number,
  ) {
    super(message);
    this.name = 'CustomErrorHandler';
    this.status = status;
    this.originalError = originalError;
    this.errorNumber = errorNumber;
  }
}
