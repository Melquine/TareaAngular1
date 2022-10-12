import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../Models/product.model'
import * as dataRaw from '../../data/products.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: ProductModel[] = []

  constructor() { }

  ngOnInit(): void {
    const { data } = (dataRaw as any).default 
    this.products = data
  }

}
