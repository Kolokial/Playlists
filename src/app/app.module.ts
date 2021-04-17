import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { PlaylistArtComponent } from './components/playlist-art/playlist-art.component'
import { PlaylistsService } from './providers/playlists/playlists.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PlaylistsModule } from './features/playlists/playlists.module'

@NgModule({
    declarations: [AppComponent, PlaylistArtComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PlaylistsModule,
    ],
    providers: [PlaylistsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
