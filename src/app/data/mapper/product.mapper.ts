import {ProductEntity} from '@data/entity';
import {ProductDto} from '@data/dto';

export class ProductMapper {
  static mapToModelProduct(dto: ProductDto): ProductEntity {
    return new ProductEntity({
      title: dto.title,
      price: dto.price,
      description: dto.description,
      images: dto.images,
      category: dto.category.name
    })
  }
}
