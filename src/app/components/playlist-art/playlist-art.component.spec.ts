import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaylistArtComponent } from './playlist-art.component'

describe('PlaylistArtComponent', () => {
    let component: PlaylistArtComponent
    let fixture: ComponentFixture<PlaylistArtComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlaylistArtComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaylistArtComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
