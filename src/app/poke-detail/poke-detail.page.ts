import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiService } from '../api.service';
import { validateConfig } from '@angular/router/src/config';
import { Storage } from '@ionic/storage';
import { TransferDataService } from '../transfer-data.service';
import { FavoriteService } from '../favorite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {

  private pokemon = new Pokemon();

  constructor(private storage: Storage, private apiService : ApiService, private data : TransferDataService, private fav : FavoriteService, private router: Router) { 
  }

  ngOnInit() {
    this.pokemon = this.data.getData();
    
  }

  home(){
    this.router.navigate(['/home']);
  }

  setFavorite(pokemon : Pokemon){
    if(pokemon.favori == true){
      pokemon.favori = false;
      this.fav.removeFromFavorite(pokemon);
    }
    else{
      pokemon.favori = true;
      this.fav.addToFavorite(pokemon);
    }
  }
}
