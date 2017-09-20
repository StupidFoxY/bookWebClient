import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Router,ActivatedRoute,ParamMap} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BooksService]
})
export class BooksComponent implements OnInit {

  books:any;
  constructor(private bookSer:BooksService, private router:Router,private aroute:ActivatedRoute) {

  }

  ngOnInit() {
    let that=this;
    that.bookSer.mostcombooks(function (result) {
      that.books=result;
      console.log(JSON.stringify(result)+"这是所有的推荐书");
    })
  }


  ngOnDestroy() {
  }

  toBookDetail(book_id) {
    this.router.navigate(['/detail',book_id]);
  }

}