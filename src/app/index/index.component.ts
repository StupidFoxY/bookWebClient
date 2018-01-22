import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tabs=['书籍分类','文章推荐'];
  tab_index=0;


  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
