import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "https://pokeapi.co/api/v2/";


  constructor(private http: HttpClient) { }

  //récupère les infos d'un pokemon en particulier
  getPoke(){
    return this.http.get(this.apiUrl+"pokemon/1");
  }

  //récupère un pokemon par son nom
  getPokeByName(name: string){
    return this.http.get(this.apiUrl+"pokemon/"+name);
  }

  //récupère un liste de pokemons
  getPokeList(){
    return this.http.get(this.apiUrl+"pokemon/");
  }

  //récupérer les informations d'un pokemon à partir de son url depuis la liste
  getPokeFromList(url: string){
    return this.http.get(url);
}

}
