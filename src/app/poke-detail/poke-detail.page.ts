import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiService } from '../api.service';
import { validateConfig } from '@angular/router/src/config';
import { Storage } from '@ionic/storage';
import { TransferDataService } from '../transfer-data.service';
import { FavoriteService } from '../favorite.service';
import { TeamService } from '../team.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {

  private pokemon = new Pokemon();
  private pokemons : Array<Pokemon> = [];

  constructor(private myToast : ToastController, private storage: Storage, private apiService : ApiService, private data : TransferDataService, private fav : FavoriteService, private tserv : TeamService) { 
  }

  ngOnInit() {
    this.pokemon = this.data.getData();
    this.tserv.getTeam().then(val=>{
      this.pokemons = val;
      console.log(this.pokemons)
    })
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

  setInTeam(pokemon : Pokemon){
    // this.tserv.getTeam().then(val=>{
    //   this.pokemons = val;
    //   console.log(this.pokemons)
    // })
    if(this.pokemons.length<6){
      console.log("passage 1 dans setInTeam");
      
      if(!this.tserv.alreadyInTeam(pokemon)){
        this.tserv.addToTeam(pokemon);
        this.getToast("Pokemon ajouté à l'équipe");      
      }
    }else{
      this.getToast("Equipe déjà complète. Ajout impossible");
    }
  }

  

  async getToast(meSSage : string){
    const toast = await this.myToast.create({
      message : meSSage,
      duration : 3000,
      showCloseButton : false,
      position : 'middle',
      closeButtonText:'Done'
    });
    toast.present();
  }
}
