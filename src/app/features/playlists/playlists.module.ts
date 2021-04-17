import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlaylistsComponent } from './playlists.component'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
    declarations: [PlaylistsComponent],
    imports: [CommonModule, MatListModule, MatIconModule],
    exports: [PlaylistsComponent],
})
export class PlaylistsModule {}
