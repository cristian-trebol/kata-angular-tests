import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFormComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
      ],
    });
    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // DOM !!!!
  it('should test onChange pokemonInput, should update pokemonNameControl',  () => {
    fixture.detectChanges();

    const pokemonNameElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#pokemonNameInput');
    const inputValue = 'newPokemonName';
    pokemonNameElement.value = inputValue;

    pokemonNameElement.dispatchEvent(new Event('input'));


    expect(component.pokemonNameControl.value).toBe(inputValue);
  });
});
