import { Component, OnInit } from '@angular/core';
import { IPlaylistContent } from 'src/app/providers/playlists/IPlaylists';
import { PlaylistsService } from 'src/app/providers/playlists/playlists.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  playlistContent: IPlaylistContent[];

  constructor(private _playlistService: PlaylistsService) {}

  ngOnInit(): void {
    this._playlistService.getPlaylists().subscribe({
      next: (response) => {
        console.log(response);
        this.playlistContent = response.featuredPlaylists.content;
      },
    });
  }
}
