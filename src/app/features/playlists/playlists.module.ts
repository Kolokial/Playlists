import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlaylistsComponent],
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  exports: [PlaylistsComponent],
})
export class PlaylistsModule {}
