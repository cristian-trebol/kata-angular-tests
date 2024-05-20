import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  fetchPokemons(): Observable<any> {
    const url = `${this.apiUrl}/pokemon?limit=5`;
    return this.http.get<any>(url);
  }

  fetchPokemonDetail(name:string): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${name}`;

    return this.http.get<any>(url);
  }
}
