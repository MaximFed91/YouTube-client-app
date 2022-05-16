import { IAppState } from '../redux.models';

export const selectUserCards = (state: IAppState) => state.userCards;
export const selectYoutubeCards = (state: IAppState) => state.youtubeCards;
