import {environment} from '@environments/environment';
import {ProductRepository} from '@data/repositories';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductMapper} from '@data/mapper';
import {ProductEntity} from '@data/entity';
import {ProductDto} from '@data/dto';

@Injectable()
export class GetAllProductCommand {
  private http: HttpClient = inject(HttpClient);
  private repository: ProductRepository = inject(ProductRepository);

  execute(): void {
    this.http.get<Array<ProductDto>>(`${environment.apiUrl}/products`).subscribe({
      next: (response: Array<ProductDto>) => {

        const mappedData: Array<ProductEntity> = response
          .map((dto: ProductDto): ProductEntity => ProductMapper.mapToModelProduct(dto));

        this.repository.setProducts(mappedData);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
      complete: () => {
        console.log('Product fetching completed.');
      }
    });
  }
}
