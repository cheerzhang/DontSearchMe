import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient, HttpParams,HttpClientModule } from '@angular/common/http';

@Injectable()
export class LocalImgService {
  a='';
  baseimgEvent = new EventEmitter<string>();
  constructor(private http: HttpClient){}
  getImgUrl(username:string):Promise<any>{
    let pa = new HttpParams()
      .set('username',username);
    console.log('>>> us',pa);
    return(
      //this.http.get('/user/', {params: pa})
      this.http.get('/gsearch/user/'+username)
        .take(1) //from observable take 1 from the stream
        .toPromise()
        .then((result) => {
          console.log('>>> local result',result);
          return (result);
        })
    );
  }
}
