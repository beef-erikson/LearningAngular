import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductViewService } from "./product-view.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService]
})

export class ProductViewComponent implements OnDestroy, OnInit {
  @Input() id = -1;
  name = '';
  private productSub = new Subject<void>();

  constructor(private productViewService: ProductViewService) {}

  private getProduct() {
    this.productViewService.getProduct(this.id).pipe(takeUntil(this.productSub)).subscribe(product => {
      if (product) {
        this.name = product.name;
      }
    });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }
}
