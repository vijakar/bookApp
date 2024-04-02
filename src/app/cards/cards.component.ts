import { Component } from '@angular/core';
import { BooksAppService } from '../books-app.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

public booksData:any=[]





  constructor(private _booksAppService:BooksAppService){
    this._booksAppService.getData().subscribe(
      (data:any)=>{
        this.booksData=data;
      },(err:any)=>{
        alert('Internal server error')
      }
    )
  }
}
