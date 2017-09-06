import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[]=[];
  category;

  constructor(
    route: ActivatedRoute,
    private productService: ProductService) {

    productService.getAll().subscribe( products => {
      this.products= products;

      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter( p => p.category === this.category) : this.products;
      });
    });

  }

  ngOnInit() {
  }

}
