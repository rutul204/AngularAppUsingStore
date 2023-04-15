import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/Product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  showImage: boolean = false;
  private _filterStr: string = '';

  public get filterStr(): string{
    return this._filterStr;
  }

  public set filterStr(val: string){
    this._filterStr = val;
    this.filterProducts(this._filterStr);
  }

  constructor(private productService: ProductListService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
        this.filteredProducts = this.products;
      }
    )
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  filterProducts(val: string){
    val = val.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(p => p.productName.toLocaleLowerCase().indexOf(val) !== -1);
  }

}
