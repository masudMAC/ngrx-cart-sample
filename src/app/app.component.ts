import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Add, Remove, Clear } from './actions/cart.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cart$: Observable<[]>;

  constructor(private store: Store<{ cart: [] }>) {
    this.cart$ = store.pipe(select('cart'));
  }

  increment() {
    this.store.dispatch(Add({ title: "Produto 1" }));
  }

  decrement() {
    this.store.dispatch(Remove({ title: "Produto 1" }));
  }

  reset() {
    this.store.dispatch(Clear());
  }
}
