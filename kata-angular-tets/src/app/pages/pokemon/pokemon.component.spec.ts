import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

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
        MatSliderModule,
        MatSelectModule,
        MatInputModule,
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

  // it('should call api and get hydrocarbontax data ', () => {
  //   component.fetchHydrocarbonTax();
  //   const httpRequest = httpMock.expectOne(
  //     'http://localhost:5000/portal_consulting/v1/api/db/hydrocarbon_tax?idcontract=1'
  //   );
  //   const hydrocarbonTaxData: HydrocarbonTax[] = [
  //     {
  //       idhydrocarbon_tax: 2,
  //       idregulated_cost: 1,
  //       idsubmeter: 2,
  //       percentage: 0.3,
  //     },
  //     {
  //       idhydrocarbon_tax: 1,
  //       idregulated_cost: 1,
  //       idsubmeter: 1,
  //       percentage: 0.5,
  //     },
  //   ];
  //   httpRequest.flush(hydrocarbonTaxData);

  //   expect(component.dataSource.data).toEqual(hydrocarbonTaxData);
  //   expect(httpRequest.request.method).toBe('GET');
  // });

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

  //TODO TEST PARA TESTEAR ONCLICK BUTTON SE LLAMA FUNCION CREAR POKEMON
});
