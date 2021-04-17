import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BaseService } from '../BaseService'
import { IFeaturedPlaylistsResponse } from './IPlaylists'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class PlaylistsService extends BaseService {
    constructor(_http: HttpClient) {
        super(_http)
    }

    public getPlaylists(): Observable<IFeaturedPlaylistsResponse> {
        return this.httpGet<IFeaturedPlaylistsResponse>(
            'api/featured-playlists.json'
        )
    }
}
