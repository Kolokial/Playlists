import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  IFeaturedPlaylists,
  IFeaturedPlaylistsResponse,
  IPlaylistContent,
} from 'src/app/providers/playlists/IPlaylists';
import { PlaylistsService } from 'src/app/providers/playlists/playlists.service';

import { PlaylistsComponent } from './playlists.component';

describe('PlaylistsComponent', () => {
  let component: PlaylistsComponent;
  let fixture: ComponentFixture<PlaylistsComponent>;

  let playlistContent = {
    id: 'pl.test',
    kind: 'myKind',
    name: 'My Test playlist',
    artwork: 'artworkUrl',
    curator_name: 'Curatorrrr',
  } as IPlaylistContent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistsComponent],
      providers: [
        {
          provide: PlaylistsService,
          useValue: {
            getPlaylists: () =>
              of({
                featuredPlaylists: {
                  content: [playlistContent] as IPlaylistContent[],
                } as IFeaturedPlaylists,
              } as IFeaturedPlaylistsResponse),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('if the playlist component recieves data', () => {
    it('it should show a list item', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.playlist-name').textContent).toContain(playlistContent.name);
      expect(compiled.querySelector('.playlist-curator').textContent).toContain(playlistContent.curator_name);
      expect(compiled.querySelector('.artwork').src).toContain(playlistContent.artwork);
    });
  });
});
