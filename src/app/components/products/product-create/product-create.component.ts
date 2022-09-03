import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public productId = this.activatedRoute.snapshot.paramMap.get('id') || ''

  public product: IProduct = {
    name: '',
    price: null,
    description: '',
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    if(this.productId) this.getProduct()
    

  }

  getProduct() {
    this.productService.readByID(this.productId).subscribe((res)=> {
      this.product = res
    })
  }

  createProduct() {
    if(!this.product.name || !this.product.price) {
      return this.productService.showMessage('Ainda há campos a serem preenchidos!')
    }

    const request = !this.productId
    ? this.productService.create(this.product)
    : this.productService.update(this.product);

    request.subscribe(() => {
      this.productService.showMessage(
        `Produto ${this.productId ? 'atualizado': 'criado'} com sucesso!`
        )
      this.router.navigate(['products'])
    })
  }

  cancel() {
    this.router.navigate(['products'])
  }

}
