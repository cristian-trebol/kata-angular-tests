import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';

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
        MatSelectModule,
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
  it('should test onChange pokemonNameInput, should update pokemonNameControl',  () => {
    fixture.detectChanges();

    const pokemonNameElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#pokemonNameInput');
    const inputValue = 'newPokemonName';
    pokemonNameElement.value = inputValue;

    pokemonNameElement.dispatchEvent(new Event('input'));


    expect(component.pokemonNameControl.value).toBe(inputValue);
  });

  xit('should test onChange pokemonTypeRequiredControl, should update pokemonTypeRequiredControl',  () => {
    fixture.detectChanges();

    const pokemonTypeRequiredElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#pokemonTypeRequiredControl');
    const inputValue = 'Agua';
    pokemonTypeRequiredElement.value = inputValue;

    pokemonTypeRequiredElement.dispatchEvent(new Event('onSelectionChange'));


    expect(component.pokemonTypeRequiredControl.value).toBe(inputValue);
  });

  it('should test onChange pokemonStatsHPControl, should update pokemonStatsHPControl',  () => {
    fixture.detectChanges();

    const pokemonStatsHPElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#pokemonStatsHPControl');
    const inputValue = '50';
    pokemonStatsHPElement.value = inputValue;

    pokemonStatsHPElement.dispatchEvent(new Event('input'));


    expect(component.pokemonStatsHPControl.value).toBe(inputValue);
  });

  it('should test onChange pokemonStatsHPControl, should update pokemonStatsHPControl',  () => {
    fixture.detectChanges();

    const pokemonStatsHPElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#pokemonStatsHPControl');
    const inputValue = '50';
    pokemonStatsHPElement.value = inputValue;

    pokemonStatsHPElement.dispatchEvent(new Event('input'));


    expect(component.pokemonStatsHPControl.value).toBe(inputValue);
  });


  it('should test onChange pokemonNameControl, should update pokemonStatsHPControl',  () => {
    component.state = 'create';
    const inputValue = '';
    expect(component.pokemonNameControl.value).toBe(inputValue);
  });

  it('should test onChange pokemonNameControl, should update pokemonName',  () => {
    component.state = 'update';
    component.ngOnInit();
    const inputValue = 'Picachu';
    expect(component.pokemonNameControl.value).toBe(inputValue);
  });


  
});
