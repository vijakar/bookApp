import { Component } from '@angular/core';
import { BooksAppService } from '../books-app.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  public booksData:any=[]
public isSort: boolean=false;
public order:string=''
public column:string='title'
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

  sortByTitle(){

    alert("srt")
    if(this.isSort){
      this.order="asc"
    }else{
      this.order='desc'
    }
    this._booksAppService.sortTitle(this.column, this.order).subscribe(
      (data:any)=>{
        this.booksData=data;
      },(err:any)=>{
        alert("sorted failed")
      }
    )

  }

}
