import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

<<<<<<< HEAD
  apiUrl: string = "https://pokeapi.co/";
  apiUrl20 : string = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }


  

  getPoke(){
    return this.http.get(this.apiUrl);
  }

  get20Poke(){
    return this.http.get(this.apiUrl20);
  }
=======
  apiUrl: string = "https://pokeapi.co/api/v2/";


  constructor(private http: HttpClient) { }

getPoke(){
  return this.http.get(this.apiUrl+"pokemon/1");
}
>>>>>>> e0c4ab3246802d2642907da280de090e5eb5bdb1

}
