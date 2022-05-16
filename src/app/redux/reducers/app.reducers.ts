import { createReducer, on } from '@ngrx/store';
import { IResponseItem } from 'src/app/core/response.model';
import { addCard, addYoutubeCard } from '../actions/app.actions';
import { IUserCard } from '../redux.models';

export const initialUserState: IUserCard[] = [];
export const initialYoutubeState: IResponseItem[] = [];
export const userReducer = createReducer(
  initialUserState,
  on(addCard, (state, { userCard }): IUserCard[] => [...state, userCard]),
);

export const youtubeReducer = createReducer(
  initialYoutubeState,
  on(addYoutubeCard, (state, { responseItems }): IResponseItem[] => [...state, ...responseItems]),
);
