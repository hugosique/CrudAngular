import { IProduct } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HeaderService } from '../../templates/header/header.service';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  products: IProduct[]
  displayedColumns = ['id', 'name', 'price', 'description', 'action']

  constructor(private router: Router, public productService: ProductService,
    private headerService: HeaderService) { 
      headerService.headerData = {
        title: 'Cadastro de produtos',
        icon: 'storefront',
        routeUrl: '/products'
      }
    }

  ngOnInit(): void {
    this.getProducts()

  }

  getProducts() {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  navigateToProductCreate() {
    this.router.navigate(['products/create'])
  }

}
