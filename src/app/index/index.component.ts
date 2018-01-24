import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ ArticlesService ]
})
export class IndexComponent implements OnInit {
  tabs=['书籍分类','文章推荐'];
  tab_index=0;
  articles: any;

  constructor(private articleSer: ArticlesService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    let that = this;
    that.articleSer.getAllArticles(function (result) {
      // 得到的是一个二维数组
      that.articles = result[0];
      // console.log(JSON.stringify(result[0]) + " 这是所有的推荐文章 ");
    });
  }

}
