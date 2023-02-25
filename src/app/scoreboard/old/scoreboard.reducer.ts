import { ActionsUnion, ActionTypes } from './scoreboard-page.actions';

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0,
};

export function scoreboardReducer(
  state = initialState,
  action: ActionsUnion
): State {
  switch (action.type) {
    case ActionTypes.IncrementHome: {
      return {
        ...state,
        home: state.home + 1,
      };
    }
    case ActionTypes.IncrementAway: {
      return {
        ...state,
        away: state.away + 1,
      };
    }
    case ActionTypes.Reset: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
