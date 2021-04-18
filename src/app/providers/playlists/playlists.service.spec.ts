import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlaylistsService } from './playlists.service';
import { HttpClient } from '@angular/common/http';

describe('PlaylistsService', () => {
  let service: PlaylistsService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlaylistsService,
        {
          provide: HttpClient,
          useValue: HttpTestingController,
        },
      ],
    });

    service = TestBed.inject(PlaylistsService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
