# And now for my final thoughts...

This was an interesting challenge. Hopefully it's met the criteria you were looking for.

## Successes

Managed to get most of the UI to look how I would like, minimalist and subtle. Mobile friendly and semi in keeping with Material's ethos.

## Challenges/Failures

Unfortunatley, I wasn't able to get a unit test written for the playlist.service, not for a lack of trying. 9 out of 10 tests passed. I think there's an issue with a `HttpClient` dependency which I think is related to the `BaseService` also having that requirement and being passed via `super`. I would like to have investigated that issue a bit more, or come up with an alternative solution. My idea was to create a so-called `BaseService` that would handle most, if not all, http requests via `HttpClient`, and then deal with the mundane error, url, response, etc, handling.

However, if we needed to absolutely get the product out the door, due to time constraints, the simple, but inelegant solution would be to not extend the `BaseService`, either inject an object that handled the `HttpClient` stuff for us, or inject `HttpClient` directly into `PlaylistService` and do the calls from within. Then at a later date, attempt to tidy up.

## Comments

I like the idea of this challenge and I would have liked to have gone a bit further with the UI, but there's only so much you can do with the data at hand. It would have been nice to be able to display the contents of playlists, and then meta-data relating to tracks therein. Possibly linking directly to Apples player in iTunes. If this wasn't Apple, then perhaps integrating with another API to find alternative sources to play from (e.g. YouTube, Spotify). If we _really_ wanted to turn this into some sort of "bookmarks" app, then being able to like and share the appropriate playlists might be a possible starting point.

---

# PlaylistsViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
