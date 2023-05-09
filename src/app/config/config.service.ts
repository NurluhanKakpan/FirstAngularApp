import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable, tap} from "rxjs";
import {IProduct} from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})

export class  ConfigService {
  constructor(private http: HttpClient){

  }

  products: IProduct[] = []

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`https://fakestoreapi.com/products`, {
      params: new HttpParams({
        fromObject:{limit:5}
      })
    }).pipe(delay(100),tap(
      products=>this.products = products
    ))
    }

    createProduct(product : IProduct): Observable<IProduct>{
      return this.http.post<IProduct>(`https://fakestoreapi.com/products`,product).pipe(tap(
        products=>this.products.push(product)
      ));
    }
}
