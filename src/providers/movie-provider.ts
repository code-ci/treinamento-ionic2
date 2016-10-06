import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
  }

  search(query:string) {
    const search = new URLSearchParams();
    search.set("api_key", "f52649af153128b92b1c13e8ebed0575");
    // search.set("language", "pt-BR");
    search.set("query", query);

    const options = new RequestOptions({ search });

    return this.http.get("https://api.themoviedb.org/3/search/movie", options).map(res => res.json()).toPromise();
  }
}
