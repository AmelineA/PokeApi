import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "https://pokeapi.co/api/v2/";


  constructor(private http: HttpClient) { }

  
  getPokeJSON(){
    return this.http.get(this.apiUrl+"pokemon/");
  }

  
}
