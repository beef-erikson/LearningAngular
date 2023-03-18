import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements AfterViewInit{
  selectedProduct: Product | undefined;
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name: 'Microphone',
      price: 200
    },
    {
      name: 'Wireless Keyboard',
      price: 85
    }
  ]

  @ViewChild(ProductDetailComponent) productDetail:
    ProductDetailComponent | undefined;

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
