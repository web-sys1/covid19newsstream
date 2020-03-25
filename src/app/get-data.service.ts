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
    return this.http.get(this.DataUrl,{params:{'q':'coronavirus', 'from':'2020-03-23&', 'sortBy':'popularity&', 'apiKey':'a7aeb2fbce474893a1bdc9411ee2de9d'}} )
  }
}
