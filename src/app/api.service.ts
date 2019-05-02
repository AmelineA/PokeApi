import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "https://pokeapi.co/";
  apiUrl20 : string = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }


  

  getPoke(){
    return this.http.get(this.apiUrl);
  }

  get20Poke(){
    return this.http.get(this.apiUrl20);
  }

}
