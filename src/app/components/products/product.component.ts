import {Component,Input} from '@angular/core';
import {IProduct} from "../../models/IProduct";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent{
  title:string = ('Product');
  @Input() product:IProduct;
  details = false;
  message = "Successfully buy"
  protected readonly alert = alert;
}
