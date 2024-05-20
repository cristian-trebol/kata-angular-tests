import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/interfaces/pokemon-detail.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonDetail!:PokemonDetail;
  pokemonNameSelected!:string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.fetchPokemons().subscribe((data) => {
      this.pokemons = data.results;
    });
  }

  fetchPokemon(){
    this.pokemonService.fetchPokemons().subscribe((data) => {
      this.pokemons = data.results;
    });
  }

  fetchPokemonDetail(name:string){
    this.pokemonNameSelected = name;
    this.pokemonService.fetchPokemonDetail(name).subscribe((data) => {
      this.pokemonDetail = data;
    });
  }
}
