import {ProductModel} from '@data/model';

export class ProductEntity {
  private _source!: ProductModel;

  constructor(private readonly source: ProductModel) {
    this._source = source;
  }

  get title(): string {
    return this._source.title;
  }

  get price(): number {
    return this._source.price;
  }

  get description(): string {
    return this._source.description;
  }

  get images(): Array<string> {
    return this._source.images;
  }

  get category(): string {
    return this._source.category;
  }
}
