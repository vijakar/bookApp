import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksAppService {

  constructor(private _httpClient:HttpClient) { }

   url='https://s3.amazonaws.com/api-fun/books.json'

  getData():Observable<any>{
   return this._httpClient.get(this.url)
  }

  sortTitle(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://s3.amazonaws.com/api-fun/books.json?sortBy="+column+"&order="+order)
  }
}
