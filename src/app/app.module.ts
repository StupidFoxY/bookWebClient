import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

//rout
import { AppRoutingModule } from './app-routing.module';

//service
import { GlobalPropertyService } from './services/global-property.service';

//pipe
import { FindbookPipe } from './pipes/findbook.pipe';
import { FindArticlePipe } from './pipes/find-article.pipe';
import { StringSlicePipe} from "./pipes/string-slice.pipe";

//directive
import {MyStyleDirective} from "./directives/mystyle.directive";
import {SearchStyleDirective} from "./directives/searchstyle.directive";

//component
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FindComponent } from './find/find.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookitemComponent } from './find/bookitem/bookitem.component';
import { EverybookComponent } from './find/everybook/everybook.component';
import { ArticleitemComponent } from './find/articleitem/articleitem.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistBookitemComponent } from './booklist/booklist-bookitem/booklist-bookitem.component';
import { NavComponent } from './nav/nav.component';
import { BootomComponent } from './bootom/bootom.component';
import { BannerComponent } from './index/banner/banner.component';
import { BooksComponent } from './index/books/books.component';
import { TabComponent } from './index/tab/tab.component';
import { ArticleComponent } from './index/article/article.component';
import { PaginationComponent } from './index/pagination/pagination.component';
import { PayComponent } from './pay/pay.component';
import { PaysecondComponent } from './paysecond/paysecond.component';
import { ConfirmComponent } from './paysecond/confirm/confirm.component';
import { ConfirmstepComponent } from './paysecond/confirm/confirmstep/confirmstep.component';
 import { TopicComponent } from './topic/topic.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { SearchTopicComponent } from './topic/search-topic/search-topic.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { TopicTopComponent } from './topicdetail/topic-top/topic-top.component';
import { ArticleCommentComponent } from './articledetail/article-comment/article-comment.component';
import { RuntopComponent } from './runtop/runtop.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import {PublishComponent} from "./publish/publish.component";
import { TestpublishComponent } from './testpublish/testpublish.component';
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { BookcommentComponent } from "./bookdetail/bookcomment/bookcomment.component";
import { SentenceComponent } from "./bookdetail/sentence/sentence.component";
import {PageComponent} from "./page/page.component";
import {SearchComponent} from "./search/search.component";
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PayovertimeComponent } from './payovertime/payovertime.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { PersonaldatailtopComponent } from './personaldetail/personaldatailtop/personaldatailtop.component';
import { OrderitemComponent } from './personal-center/orderitem/orderitem.component';
import { AddressComponent} from './address/address.component';
import { AddressShowComponent } from './pay/address-show/address-show.component';
import { BkrecomComponent } from './bookdetail/bookcomment/bkrecom/bkrecom.component';
import { ArtrecomComponent } from './articledetail/article-comment/artrecom/artrecom.component';
import { BkcomitemComponent } from './personal-center/bkcomitem/bkcomitem.component';
import { AllcomComponent } from './personal-center/allcom/allcom.component';
import { ArtcomitemComponent } from './personal-center/artcomitem/artcomitem.component';
import { RefunddetailComponent } from './refunddetail/refunddetail.component'
import { ShortcommentComponent } from './bookdetail/shortcomment/shortcomment.component';
import { ShortpublishComponent } from './shortpublish/shortpublish.component';
import { ShortdetailComponent } from './shortdetail/shortdetail.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FindComponent,
    LoginComponent,
    RegistComponent,
    NotfoundComponent,
    BookitemComponent,
    EverybookComponent,
    ArticleitemComponent,
    BooklistComponent,
    BookdetailComponent,
    BooklistBookitemComponent,
    NavComponent,
    BootomComponent,
    BannerComponent,
    BooksComponent,
    TabComponent,
    ArticleComponent,
    PaginationComponent,
    PayComponent,
    PaysecondComponent,
    ConfirmComponent,
    ConfirmstepComponent,
    SearchComponent,
    TopicComponent,
    TopicListComponent,
    SearchTopicComponent,
    TopicdetailComponent,
    TopicTopComponent,
    ArticledetailComponent,
    ArticleCommentComponent,
    TestpublishComponent,
    PersonalCenterComponent,
    BookcommentComponent,
    SentenceComponent,
    PublishComponent,
    PersonaldetailComponent,
    PersonaldatailtopComponent,
    PersonalInformationComponent,
    PageComponent,
    PaysuccessComponent,
    PayovertimeComponent,
    OrderitemComponent,
    AddressComponent,
    BkrecomComponent,
    ArtrecomComponent,
    BkcomitemComponent,
    AllcomComponent,
    ArtcomitemComponent,
    RefunddetailComponent,
    RuntopComponent,
    AddressShowComponent,
    AddressShowComponent,
    ShortcommentComponent,
    ShortpublishComponent,
    DialogComponent,
    ShortdetailComponent,

    //pipe
    FindbookPipe,
    StringSlicePipe,
    FindArticlePipe,

    //directive
    MyStyleDirective,
    SearchStyleDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    //一定要放最后一个
    AppRoutingModule,
    // NgZorroAntdModule.forRoot()
  ],
  //global service
  providers: [GlobalPropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
