import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiService } from '../api.service';
import { validateConfig } from '@angular/router/src/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {

  pokemon = new Pokemon();

  constructor(private storage: Storage, private apiService : ApiService) { 
  }

  ngOnInit() {
    this.getPoke();
  }

  getPoke(){
    this.apiService.getPokeJSON().subscribe((val)=>{
      let result : any =val;
      this.pokemon.name = result.results[0].name;
      this.pokemon.url = result.results[0].url;
      this.pokemon.favori = false;
      console.log(this.pokemon);
    })
  }
}
