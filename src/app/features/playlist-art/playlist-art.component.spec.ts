import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PlaylistArtComponent } from './playlist-art.component';

describe('PlaylistArtComponent', () => {
  let component: PlaylistArtComponent;
  let fixture: ComponentFixture<PlaylistArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatListModule, MatIconModule],
      declarations: [PlaylistArtComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
