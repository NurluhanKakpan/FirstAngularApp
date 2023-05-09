import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/products/product.component";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './components/modal/modal.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import {ɵEmptyOutletComponent} from "@angular/router";
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FilterProductsPipe,
    ModalComponent,
    ProductCreateComponent,
    FocusDirective

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    ɵEmptyOutletComponent,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
