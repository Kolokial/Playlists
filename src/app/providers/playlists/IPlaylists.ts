export interface IFeaturedPlaylistsResponse {
    featuredPlaylists: IFeaturedPlaylists
}

export interface IFeaturedPlaylists {
    name: string
    content: IPlaylistContent[]
}

export interface IPlaylistContent {
    id: string
    kind: string
    name: string
    url: string
    curator_name: string
    artwork: string
}
