import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http'
import { ShellRoutingModule } from './shell/shell-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShellModule} from "./shell/shell.module";
import {EmissionFactorModule} from "./emission-factor/emission-factor.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ShellRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}, {}),
        BrowserAnimationsModule,
        ShellModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
