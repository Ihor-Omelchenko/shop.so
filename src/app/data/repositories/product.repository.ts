import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {ProductEntity} from '@data/entity';

@Injectable()
export class ProductRepository {
  private products: WritableSignal<Array<ProductEntity>> = signal([]);

  public setProducts(products: Array<ProductEntity>): void {
    this.products.set(products);
  }

  public readonly isProducts: Signal<Array<ProductEntity>> = this.products.asReadonly();
}
