import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Pokemon } from './models/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'http://api.skilldistillery.com:8080/poke/data/poke';

  index() {
    return this.http.get<Pokemon[]>(this.url + '?sorted=true')
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABOOM');
     })
    );
  }

  create(pokemon) {
    return this.http.post<Pokemon>(this.url, pokemon)
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABOOM');
     })
    );
  }

  constructor(private http: HttpClient) { }
}
