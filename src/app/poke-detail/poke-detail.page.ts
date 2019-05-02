import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {

  private storage:Storage;
  private pokemon : Pokemon;
  apiService: any;

  constructor(storage: Storage, apiService:ApiService) { 
    this.storage = storage;
    this.apiService.getPoke().subscribe((val) => {
      let result: any = val;
      console.log(result);//.results[0]);
      // this.pokemon = result.results[0].id;
      // this.pokemon = result.results[0].name;

    })
  }

  ngOnInit() {
  }

}
