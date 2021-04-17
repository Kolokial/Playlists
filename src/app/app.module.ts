import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistsService } from './providers/playlists/playlists.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaylistsModule } from './features/playlists/playlists.module';
import { PlaylistArtModule } from './features/playlist-art/playlist-art.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorCardModule } from './components/error-card/error-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlaylistsModule,
    PlaylistArtModule,
    MatButtonModule,
    MatIconModule,
    ErrorCardModule,
  ],
  providers: [PlaylistsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
