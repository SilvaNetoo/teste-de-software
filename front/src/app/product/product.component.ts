import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formProduct: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        if (queryParams && queryParams['id']) {
          this.productService.getRequest(`products/${queryParams['id']}`).subscribe(product => {
            this.formProduct.setValue(product);
          });
        }
      });
  }

  private createForm(): void {
    this.formProduct = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  registerProduct() {
    if (this.formProduct.valid && this.formProduct.get('id').value === '') {
      this.productService.postRequest('products', this.formProduct.value).subscribe(() => {
        this.showProduct();
      });
    } else {
      const params = new HttpParams().append('id', this.formProduct.get('id').value);
      this.productService.postRequest('products', this.formProduct.value, params).subscribe(() => {
        this.showProduct();
      });
    }
  }

  showProduct() {
    this.router.navigate(['product-list']);
  }

}
