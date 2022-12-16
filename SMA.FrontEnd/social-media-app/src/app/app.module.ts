import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LogoutComponent } from './components/logout/logout.component';
import { CommentComponent } from './components/PostComponents/comment/comment.component';
import { PostComponent } from './components/PostComponents/post/post.component';
import { PostSummaryComponent } from './components/PostComponents/post-summary/post-summary.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    LogoutComponent,
    CommentComponent,
    PostSummaryComponent,
    NavBarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
