import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorCardModule } from 'src/app/components/error-card/error-card.module';

@NgModule({
  declarations: [PlaylistsComponent],
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, MatProgressSpinnerModule, ErrorCardModule],
  exports: [PlaylistsComponent],
})
export class PlaylistsModule {}
