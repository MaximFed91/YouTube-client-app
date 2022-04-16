export interface IThumbnailsSize {
  url: string;
  width: number;
  height: number;
}

export interface IResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IThumbnailsSize;
      medium: IThumbnailsSize;
      high: IThumbnailsSize;
      standard: IThumbnailsSize;
      maxres: IThumbnailsSize;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IResponseItem[];
}
export interface ISearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
}
export interface ISearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchItem[];
}
