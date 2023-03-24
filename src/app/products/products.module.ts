import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {ɵEmptyOutletComponent} from "@angular/router";
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    FavoritesComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
