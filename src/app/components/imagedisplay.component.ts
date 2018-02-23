import { Component, OnInit,Input,Output,ViewChild,EventEmitter,OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm,FormControl } from '@angular/forms';
import { KeyWords,ImgManage } from '../model';
import { Subscription } from 'rxjs/Subscription';
import { GiphyService } from '../giphy.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-imagedisplay',
  templateUrl: './imagedisplay.component.html',
  styleUrls: ['./imagedisplay.component.css']
})
export class ImagedisplayComponent implements OnInit, OnDestroy {

  @ViewChild('addForm')
  addForm: NgForm;


  @Output()
  kdform: EventEmitter<KeyWords> = new EventEmitter<KeyWords>();

  @Input()
  childuser : string
  kw = '';
  rating = '';
  offset='';

  img = {};
  imgarray = [];
  eachimg = {};
  allImgManage: ImgManage[] = [];
  iurl = '';
  totalcount = 0;


  //formSub$: Subscription;
  private sub: Subscription;

  constructor(private http: HttpClient,private giphySvc:GiphyService){}

ngOnInit() {
  this.sub = this.giphySvc.baseimgEvent.subscribe(
    (data) => {
      this.giphySvc.getImgUrl(data.kw,data.rating,data.limit,data.offset)
        .then((imgreturn) => {
          this.totalcount = imgreturn.pagination.total_count;
          this.img = imgreturn.data;
          this.imgarray = Object.keys(this.img);
          for(let c in this.imgarray){
            this.eachimg = this.img[c].images;
            console.log('>>> url !!!!',this.img[c].images.downsized);
            this.iurl = this.img[c].images.downsized.url;
            let imgm: ImgManage = {
              title: this.img[c].title,
              imgurl: this.iurl,
              totalcount: this.totalcount,
              imgid: this.img[c].id
            }
            this.allImgManage.push(imgm);
          }
        });
      this.allImgManage=[];
      console.log('>>> giphy service event: final ',data);
    },
    (error) => {
      console.log('>>> giphy service error: ', error);
    }
  );
}

ngOnDestroy(){
    this.sub.unsubscribe();
  }



  addImages(){
    console.log('>> connect component ???: ',this.childuser);

    //
  }
}
