import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  hiddenhot=false;
  hiddenNavs=false;
  hiddenBottom=false;
  bookcount=0;
  receive_id:any;
  constructor() { }

}
