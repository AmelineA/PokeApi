import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "https://pokeapi.co/";


  constructor(private http: HttpClient) { }

getPoke(){
  return this.http.get(this.apiUrl);
}

}
