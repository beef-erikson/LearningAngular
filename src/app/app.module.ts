import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from "./products/products.module";
import {FilterPipe} from "./products/filter.pipe";
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from "./numeric.directive";


@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
