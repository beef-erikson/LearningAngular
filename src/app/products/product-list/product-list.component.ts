import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import {Product} from "../product";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, AfterViewInit{
  selectedProduct: Product | undefined;
  products: Product[] = []

  @ViewChild(ProductDetailComponent) productDetail:
    ProductDetailComponent | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail)
    {
      console.log(`AfterViewInit value: ${this.productDetail.product}`);
    }
  }

  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
}
