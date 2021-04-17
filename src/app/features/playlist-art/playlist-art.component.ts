import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlaylistContent } from 'src/app/providers/playlists/IPlaylists';
import { PlaylistsService } from 'src/app/providers/playlists/playlists.service';

@Component({
  selector: 'app-playlist-art',
  templateUrl: './playlist-art.component.html',
  styleUrls: ['./playlist-art.component.scss'],
})
export class PlaylistArtComponent implements OnInit {
  public playlistContent: IPlaylistContent;
  public isError: boolean = false;
  private _id: string;

  constructor(private _route: ActivatedRoute, private _playlistService: PlaylistsService) {}

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('id');
    this.getPlaylistDetails(this._id);
  }

  private getPlaylistDetails(id: string): void {
    this._playlistService.getPlaylistContentById(id).subscribe({
      next: (playlistContent: IPlaylistContent) => {
        this.playlistContent = playlistContent;
      },
      error: () => {
        this.isError = true;
      },
    });
  }
}
