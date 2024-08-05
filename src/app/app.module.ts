import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShellRoutingModule } from './shell/shell-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from './shell/shell.module';
import { HttpInterceptorProviders } from './http-interceptors';
import { LoginRoutingModule } from './login/login.routing-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellRoutingModule,
    LoginRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    ShellModule,
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
