import {ChangeDetectionStrategy, Component, EventEmitter, Input,
  OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`name is ${this.product?.name} in the constructor.`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    const oldValue = product.previousValue?.name;
    const newValue = product.currentValue.name;
    if (!product.firstChange) {
      console.log(`Product changed from ${oldValue} to ${newValue}`)
    }
  }

  ngOnInit(): void {
    console.log(`name is ${this.product?.name} in the ngOnInit().`)
  }

  buy() {
    this.bought.emit(this.product?.name)
  }
}
