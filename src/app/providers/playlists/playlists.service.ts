import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../BaseService';
import { IFeaturedPlaylistsResponse, IPlaylistContent } from './IPlaylists';
import { Observable } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { IPlaylistService } from './IPlaylistService';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService extends BaseService implements IPlaylistService {
  constructor(_http: HttpClient) {
    super(_http);
  }

  public getPlaylists(): Observable<IFeaturedPlaylistsResponse> {
    return this.httpGet<IFeaturedPlaylistsResponse>('api/featured-playlists.json');
  }

  public getPlaylistContentById(id: string): Observable<IPlaylistContent> {
    return this.getPlaylists().pipe(
      mergeMap((playlistResponse) => playlistResponse.featuredPlaylists.content),
      filter((playlist) => playlist.id === id)
    );
  }
}
