import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ComponentModule } from 'src/app/components/component.module';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatSelectModule,
        MatInputModule,
        ComponentModule,
      ],
      declarations: [PokemonComponent],
    });

    fixture = TestBed.createComponent(PokemonComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?limit=5');
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //METHODS !!!!!

  it('should return true when state is visualize', () => {
    component.state = 'visualize';
    expect(component.isStateVisualize()).toBeTruthy();
  });

  it('should return false when state is not visualize', () => {
    component.state = 'create';
    expect(component.isStateVisualize()).toBeFalsy();
  });

  it('should return true when state is create', () => {
    component.state = 'create';
    expect(component.isStateCreate()).toBeTruthy();
  });

  it('should return false when state is not create', () => {
    component.state = 'visualize';
    expect(component.isStateCreate()).toBeFalsy();
  });

  // HTTP/OnInit !!!!
  it('should have data in pokemons after ngOnInit (fetchPokemons)', async(() => {
    component.ngOnInit();
    const httpRequest = httpMock.expectOne(
      'https://pokeapi.co/api/v2/pokemon?limit=5'
    );
    const expectedData = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    ];

    httpRequest.flush({ results: expectedData });

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.pokemons).toEqual(expectedData);
    });
  }));

  it('should remove pokemon from list when deletePokemon is called', () => {
    component.pokemons = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    ];

    const pokemonToDelete = 'ivysaur';
    component.deletePokemon(pokemonToDelete);

    expect(component.pokemons.length).toBe(2);
    expect(
      component.pokemons.some((pokemon) => pokemon.name === pokemonToDelete)
    ).toBe(false);
  });

  // DOM/SPY !!!!!

  //IMPORTANTE SI NO ESTA EN EL DOM EL ELEMENTO SALDRA EN ROJO EL TEST
  it('should test onClick btnCancelCreate should call method cancelCreate', async () => {
    component.state = 'create';
    fixture.detectChanges();

    const spyCancelCreateMethod = spyOn(component, 'cancelCreate');

    const cancelButtonElement: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#btnCancelCreate');

    cancelButtonElement.dispatchEvent(new Event('click'));

    expect(spyCancelCreateMethod).toHaveBeenCalledOnceWith();

  });

  it('should test onClick btnCancelCreate should not exist', async () => {
    component.state = 'visualize';
    fixture.detectChanges();

    const cancelButtonElement: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#btnCancelCreate');
      await fixture.whenStable();
      expect(cancelButtonElement).toBeNull();
  });



  it('should test btnCreatePokemon is not disabled when state is visualize', () => {
    component.state ='visualize'
    fixture.detectChanges();
  
    const buttonElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#btnCreatePokemon');
    expect(buttonElement.disabled).toBeFalsy();
  });
  
  it('should test btnCreatePokemon is disabled state is create', () => {
    component.state ='create'
    fixture.detectChanges();
  
    const buttonElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#btnCreatePokemon');
    expect(buttonElement.disabled).toBeTruthy();
  });


});
