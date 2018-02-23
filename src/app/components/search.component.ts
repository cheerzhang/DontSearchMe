import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { KeyWords } from '../model';
import { GiphyService } from '../giphy.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('baseSearchForm')
  baseSearchForm: NgForm;

  users: any[] = [];

  constructor(private giphySvc:GiphyService) { }

  ngOnInit() {
    // this.giphySvc.getAllUsers()
    //   .then(result => {
    //     this.users = result;
    //     console.log('> users = ', this.users);
    //   });
  }

  getImages(){
    console.log('>> connect component: ',this.baseSearchForm.value);
    this.giphySvc.baseimgEvent.next(this.baseSearchForm.value);
  }
}
