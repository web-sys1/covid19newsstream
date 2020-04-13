import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor( private http : HttpClient,) { }

  private DataUrl = environment.api_url

  postNews(){
    return this.http.get(this.DataUrl,{params:{'q':'coronavirus', 'from':'2020-03-23', 'sortBy':'publishedAt', 'apiKey':'7d949991a07d4c03994dddd28b3be7ee'}} )
  }
}
