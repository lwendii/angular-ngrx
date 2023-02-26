import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MoviesService } from './service/movies.service';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie Page] Load Movies'),
      mergeMap(() =>
        this.moviesService.getAll().pipe(
          map((movies) => ({
            type: '[Movies API] Movies Loaded Success',
            payload: movies,
          })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );
}
