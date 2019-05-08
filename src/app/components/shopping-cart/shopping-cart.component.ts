import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Remove, Clear } from '../../actions/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<[]>;

  constructor(private store: Store<{ cart: [] }>) {
    this.cart$ = store.pipe(select('cart'));
  }

  remove(item) {
    this.store.dispatch(Remove(item));
  }

  reset() {
    this.store.dispatch(Clear());
  }

  ngOnInit() {
  }

}
