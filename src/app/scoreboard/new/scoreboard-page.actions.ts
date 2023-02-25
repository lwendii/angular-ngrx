import { createAction, props } from '@ngrx/store';

export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
export const setScore = createAction(
  '[Scoreboard Page] Set Scores',
  props<{ game: Game }>()
);

export interface Game {
  home: number;
  away: number;
}
