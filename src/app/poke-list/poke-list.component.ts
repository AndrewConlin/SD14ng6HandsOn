import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokemons: Pokemon [] = [];
  selected = null;
  newPoke: Pokemon = new Pokemon();

  loadPokemon = function() {
    this.pokeService.index().subscribe(
      data => this.pokemons = data,
      errorMsg => console.log(errorMsg)
    );
  };

  createPokemon = function(pokemon) {
    this.pokeService.create(pokemon).subscribe(
      data => this.loadPokemon(),
      error => console.log(error)
    );
  };

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.loadPokemon();
  }

}
