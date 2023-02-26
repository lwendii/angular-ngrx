import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    { name: 'Film 1' },
    { name: 'Film 2' },
    { name: 'Film 3' },
  ];
  constructor() {}

  getAll(): Observable<Movie[]> {
    return of(this.movies);
  }
}
