import { IResponseItem } from '../core/response.model';

export interface IUserCard {
  title: string;
  description?: string;
  img: string;
  video: string;
}

export interface IAppState {
  userCards: IUserCard[];
  youtubeCards: IResponseItem[];
}
