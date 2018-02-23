import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient, HttpParams,HttpClientModule } from '@angular/common/http';

@Injectable()
export class GiphyService {
  a='';
  baseimgEvent = new EventEmitter<string>();
  constructor(private http: HttpClient){}
  getImgUrl(kw:string,rating:string,limit:string,offset:string):Promise<any>{
    if(offset==""){this.a = '0';}
    else{this.a = offset;}
    let pa = new HttpParams().set('api_key','rZ5poZL7H8vUUFHHgLKWz2escV9lybbT')
      .set('q',kw)
      .set('limit',limit)
      .set('offset',this.a)
      .set('rating',rating)
      .set('lang','en');
    console.log('>>> pa',pa);
    return(
      this.http.get('https://api.giphy.com/v1/gifs/search', {params: pa})
        .take(1) //from observable take 1 from the stream
        .toPromise()
        .then((result) => {
          return (result);
        })
    );
  }
}
