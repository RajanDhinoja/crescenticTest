import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './../models/i-movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(page?: number): Observable<IMovie[]> {
    if (page) {
      return this.http.get(
        `https://api.thecatapi.com/v1/breeds?page=${page}&limit=5`
      ) as Observable<IMovie[]>;
    } else {
      return this.http.get(
        `https://api.thecatapi.com/v1/breeds?page=1&limit=25`
      ) as Observable<IMovie[]>;
    }
  }
}
