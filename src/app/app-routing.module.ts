import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { FindComponent } from './find/find.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PayovertimeComponent } from './payovertime/payovertime.component';
import { ShortpublishComponent } from './shortpublish/shortpublish.component'
import { PayComponent } from './pay/pay.component';
import { PaysecondComponent } from './paysecond/paysecond.component';
import { SearchComponent } from './search/search.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component'
import { TopicComponent } from './topic/topic.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { RefunddetailComponent } from './refunddetail/refunddetail.component'
import {PersonalCenterComponent} from "./personal-center/personal-center.component";
import {TestpublishComponent} from "./testpublish/testpublish.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import { ShortdetailComponent } from './shortdetail/shortdetail.component'

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'booklist',
    component: BooklistComponent
  },
  {
    path: 'bookdetail/:book_id',
    component: BookdetailComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  },
  {
    path: 'topicdetail/:topic_id',
    component: TopicdetailComponent
  },
  {
    path: 'articledetail/:article_id',
    component: ArticledetailComponent
  },
  {
    path: 'search/:search_text',
    component: SearchComponent
  },
  {
    path: 'pay/:book_id',
    component: PayComponent
  },
  {
    path: 'paysecond/:book_id/:order_num/:price/:receive_id',
    component: PaysecondComponent
  },
  {
    path: 'paysuccess/:price/:order_numbering/:receive_id',
    component: PaysuccessComponent
  },
  {
    path: 'payovertime',
    component: PayovertimeComponent
  },
  {
    path: 'refunddetail/:order_id',
    component: RefunddetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'personal-center/:tab_index',
    component: PersonalCenterComponent
  },
  {
    path: 'personalinfor',
    component: PersonalInformationComponent
  },
  {
    path: 'personaldetail/:user_id',
    component: PersonaldetailComponent
  },
  {
    path: 'testpublish/:topic_id',
    component: TestpublishComponent
  },
  {
    path: 'shortpublish/:book_id',
    component: ShortpublishComponent
  },
  {
    path: 'shortdetail/:short_id',
    component: ShortdetailComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
