import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Add } from '../../actions/cart.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cart$: Observable<[]>;
  public products: any[] = [];

  constructor(private store: Store<{ cart: [] }>) {
    this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit() {
    this.products.push({ title: "Produto 1", price: 299 });
    this.products.push({ title: "Produto 2", price: 199 });
    this.products.push({ title: "Produto 3", price: 99 });
    this.products.push({ title: "Produto 4", price: 499 });
    this.products.push({ title: "Produto 5", price: 1299 });
  }

  add(product) {
    this.store.dispatch(Add(product));
  }
}
