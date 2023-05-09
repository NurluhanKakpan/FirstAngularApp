import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/IProduct";
import {ConfigService} from "./config/config.service";
import {ModalService} from "./config/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirstAngularApp';
  products: IProduct[] = [];
  isLoading = false;
  term = '';
  constructor(public configService:ConfigService,public modalService:ModalService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.configService.getAll().subscribe(products => {
      this.products = products;
      this.isLoading = false;
    })
  }

}
