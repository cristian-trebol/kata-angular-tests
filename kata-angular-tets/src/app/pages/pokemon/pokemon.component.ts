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
  pokemonDetail!: PokemonDetail;
  pokemonNameSelected!: string;

  state: 'create' | 'visualize' = 'visualize';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokemonService.fetchPokemons().subscribe((data) => {
      this.pokemons = data.results;
    });
  }

  fetchPokemonDetail(name: string) {
    this.pokemonNameSelected = name;
    this.pokemonService.fetchPokemonDetail(name).subscribe((data) => {
      this.pokemonDetail = data;
    });
  }

  createPokemon() {
    //IMPLEMENTAR
    this.state = 'create';
  }

  cancelCreate(){
    this.state ='visualize';
  }

  deletePokemon(name: string) {
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.name !== name);
  }

  isStateVisualize ():boolean{
   return this.state === 'visualize';
  }

  isStateCreate ():boolean{
    return this.state === 'create';
   }
}
