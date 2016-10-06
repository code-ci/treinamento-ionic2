import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieProvider {

  constructor(public http: Http) {}

  search(query:string) {
    var url = "https://api.themoviedb.org/3/search/movie?api_key=f52649af153128b92b1c13e8ebed0575&query=";
    return this.http.get(url + query)
               .map(res => res.json())
               .toPromise();
  }
}
