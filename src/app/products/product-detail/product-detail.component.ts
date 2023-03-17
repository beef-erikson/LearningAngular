import {ChangeDetectionStrategy, Component, EventEmitter, Input,
  OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  constructor() {
    console.log(`name is ${this.name} in the constructor.`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    if (!product.firstChange) {
      console.log(`Product changed from ${oldValue} to ${newValue}`)
    }
  }

  ngOnInit(): void {
    console.log(`name is ${this.name} in the ngOnInit().`)
  }

  buy() {
    this.bought.emit(this.name)
  }
}
