import {ChangeDetectionStrategy, Component, EventEmitter, Input,
  Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  constructor() {
    console.log(`name is ${this.name} in the constructor.`)
  }

  ngOnInit(): void {
    console.log(`name is ${this.name} in the ngOnInit().`)
  }

  buy() {
    this.bought.emit(this.name)
  }
}
