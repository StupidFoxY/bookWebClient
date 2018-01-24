import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() visible:boolean = false;
  @Output() close:EventEmitter<any> = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClose(){
    this.visible = false;
    this.close.emit(null);
  }
  toLogin(){
    this.router.navigate(['/login']);
  }
}
