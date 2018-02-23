import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { KeyWords } from '../model';
import { GiphyService } from '../giphy.service';
import { LocalImgService } from '../localimg.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('SearchlocalForm')
  SearchlocalForm: NgForm;

  constructor(private localimgSvc:LocalImgService) { }

  ngOnInit() {
  }

  getlocalImages(){
    console.log('>> connect component: ',this.SearchlocalForm.value);
    this.localimgSvc.baseimgEvent.next(this.SearchlocalForm.value);
  }

}
