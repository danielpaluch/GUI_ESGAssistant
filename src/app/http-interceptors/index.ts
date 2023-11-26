import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './errorHandler.interceptor';

/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
  {
    privide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },
];
