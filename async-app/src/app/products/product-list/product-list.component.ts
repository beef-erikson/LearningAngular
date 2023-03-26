import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { Product } from "../product";
import { ProductsService } from "../products.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  viewProviders: [ProductsService]
})

export class ProductListComponent implements OnDestroy, OnInit, AfterViewInit{
  selectedProduct: Product | undefined;
  products: Product[] = [];
  private productsSub: Subscription | undefined;

  @ViewChild(ProductDetailComponent) productDetail:
    ProductDetailComponent | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail)
    {
      console.log(`AfterViewInit value: ${this.productDetail.product}`);
    }
  }

  ngOnDestroy() {
    this.productsSub?.unsubscribe();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  private getProducts() {
    this.productsSub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }
}
