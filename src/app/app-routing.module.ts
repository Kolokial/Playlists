import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistArtComponent } from './components/playlist-art/playlist-art.component';
import { PlaylistsComponent } from './features/playlists/playlists.component';

const routes: Routes = [
  { path: 'playlist/:id', component: PlaylistArtComponent },
  { path: '', component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
