import {GetAllProductCommand} from '@commands/get-all-product.command';
import {Component, effect, inject} from '@angular/core';
import {ProductRepository} from '@data/repositories';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
  providers: [GetAllProductCommand, ProductRepository]
})
export class AppComponent {

  private command = inject(GetAllProductCommand);
  private repository = inject(ProductRepository);

  constructor() {
    this.command.execute();

    effect(() => {
      if (this.repository.isProducts().length) {
        console.log(this.repository.isProducts());
      }
    });
  }

}
