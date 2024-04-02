import { Component } from '@angular/core';
import { BooksAppService } from '../books-app.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  public booksData:any=[]

  constructor(private _booksAppService:BooksAppService){
    this._booksAppService.getData().subscribe(
      (data:any)=>{
        this.booksData=data;
        console.log(data)
      },(err:any)=>{
        alert('Getting Data failed')
      }
    )
  }

}
