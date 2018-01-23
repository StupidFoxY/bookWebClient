import { Component, OnInit, Input } from '@angular/core';
import {BooksService} from  "../../services/books.service";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
@Component({
  selector: 'app-everybook',
  templateUrl: './everybook.component.html',
  styleUrls: ['./everybook.component.css'],
  providers:[BooksService]
})
export class EverybookComponent implements OnInit {
  @Input()every_books: any;
  @Input()every_topics: any;
  books: any;
  constructor(
    private bookSer: BooksService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}
  ngOnInit() {
  }
  toTopic() {
    this.router.navigate(['/topic']);
  }
  toTopicDetail(topic_id){
    this.router.navigate(['/topicdetail',topic_id]);
  }
  toBookDetail(book_id) {
    this.router.navigate(['/bookdetail',book_id]);
  }
}
