import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorProviders } from './http-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shell/components/header/header.component';
import { NavComponent } from './shell/components/nav/nav.component';

@NgModule({
  declarations: [AppComponent],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    HeaderComponent,
    NavComponent,
  ],
})
export class AppModule {}
