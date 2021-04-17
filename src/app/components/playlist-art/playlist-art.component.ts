import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-playlist-art',
    templateUrl: './playlist-art.component.html',
    styleUrls: ['./playlist-art.component.scss'],
})
export class PlaylistArtComponent implements OnInit {
    @Input() artworkUrl: string

    constructor() {}

    ngOnInit(): void {}
}
