import { Component, OnInit } from '@angular/core';
import { ListProductService } from './service/list-product.service';
import { Product } from '../product/models/product.model';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct: Array<Product>;

  constructor(
    private listProductService: ListProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.consuiltListProduct();
  }

  private consuiltListProduct(): void {
    this.listProductService.getRequest('products').subscribe(listProduct => {
      this.listProduct = new Array<Product>();
      this.listProduct = listProduct;
    });
  }

  deletProduct(id: number) {
    this.listProductService.deleteRequest(`products/${JSON.stringify(id)}`).subscribe(response => {
      location.reload();
    });
  }

  editProduct(id: number) {
    this.router.navigate(['product'], { queryParams: { id: id } });
  }

}
