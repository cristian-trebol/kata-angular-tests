import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent {
  pokemonNameControl:FormControl = new FormControl('',Validators.required)
  pokemonTypeRequiredControl:FormControl = new FormControl('',Validators.required)
  pokemonTypeOptionalControl:FormControl = new FormControl('')
  pokemonStatsHPControl:FormControl = new FormControl('',Validators.required)
  pokemonStatsAttackControl:FormControl = new FormControl('',Validators.required)
  pokemonStatsDefenseControl:FormControl = new FormControl('',Validators.required)
  pokemonStatsSpecialAttackControl:FormControl = new FormControl('')
  pokemonStatsSpecialDefenseControl:FormControl = new FormControl('')
  pokemonStatsSpeedControl:FormControl = new FormControl('',Validators.required)

  @Input()
  state: 'create' | 'update' = 'create';

  constructor() { }

  ngOnInit(): void {
    this.ifUpdateState();

  }
  ifUpdateState() {
    if (this.state == 'update') {
      this.pokemonNameControl.setValue('Picachu');
    }
  }



}
