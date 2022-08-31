import { Router } from '@angular/router';
import { IProduct } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: IProduct = {
    name: '',
    price: null,
    description: '',
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    if(!this.product.name || !this.product.price) {
      return this.productService.showMessage('Ainda há campos a serem preenchidos!')
    }

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['products'])
    })
  }

  cancel() {
    this.router.navigate(['products'])
  }

}
