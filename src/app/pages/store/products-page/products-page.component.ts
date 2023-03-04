import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  public products$!: Observable<Products[]>;

  constructor (private data: DataService) { }

  ngOnInit() {
  this.products$ = this.data.getProducts();
  }

}
