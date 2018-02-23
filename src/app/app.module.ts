import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { GiphyService } from './giphy.service';
import { LocalImgService } from './localimg.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { ImagedisplayComponent } from './components/imagedisplay.component';
import { UsersComponent } from './components/users.component';
import { UserinfoComponent } from './components/userinfo.component';

const ROUTES: Routes = [
  { path: "", component: SearchComponent },
  { path: "favorate/:pid", component: ImagedisplayComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImagedisplayComponent,
    UsersComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GiphyService,LocalImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
