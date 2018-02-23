import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GiphyService} from '../giphy.service';
import { LocalImgService } from '../localimg.service';
import {ImgManage,SaveImg} from '../model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit, OnDestroy {

  @Input()
  childuser : string

  allImgManage: SaveImg[] = [];
  imgurl='';
  imgid='';
  imgtitle='';

  private sub: Subscription;

  constructor(private http: HttpClient,private localimgSvc:LocalImgService) { }

  ngOnInit() {
    this.sub = this.localimgSvc.baseimgEvent.subscribe(
      (data) => {
        this.localimgSvc.getImgUrl(data.username)
          .then((imgreturn) => {
            for(let c of imgreturn){
              let imgm: SaveImg = {
                imgtitle: c.imgtitle,
                imgurl: c.imgurl,
                imgid: c.imgid
              }
              this.allImgManage.push(imgm);
            }
            console.log('>>>>> return local data,',imgreturn);
          });
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
}
