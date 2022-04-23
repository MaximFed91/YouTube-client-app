import { createAction, props } from '@ngrx/store';
import { IResponseItem } from 'src/app/core/response.model';
import { IUserCard } from '../redux.models';

export const addCard = createAction('[User] addCard', props<{ userCard: IUserCard }>());
export const addYoutubeCard = createAction(
  '[App] addCard',
  props<{ responseItems: IResponseItem[] }>(),
);
