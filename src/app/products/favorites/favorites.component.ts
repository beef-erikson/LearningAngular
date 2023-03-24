import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from "../product";
import { ProductsService } from "../products.service";
import { favoritesFactory } from "./favorites";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    {
      provide: ProductsService,
      useFactory: favoritesFactory(true)
    }
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  constructor(@Host() @Optional() private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
