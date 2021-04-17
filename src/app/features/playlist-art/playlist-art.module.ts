import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PlaylistArtComponent } from './playlist-art.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorCardModule } from 'src/app/components/error-card/error-card.module';

@NgModule({
  declarations: [PlaylistArtComponent],
  imports: [CommonModule, MatCardModule, RouterModule, MatIconModule, MatProgressSpinnerModule, ErrorCardModule],
  exports: [PlaylistArtComponent],
})
export class PlaylistArtModule {}
