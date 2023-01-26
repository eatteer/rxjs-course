import { mergeMap, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../../interfaces/github-user";

const url = (id: string) => `https://api.github.com/users/${id}`;
const fetch = (username: string): Observable<GithubUser> =>
  ajax.getJSON(url(username));

/**
 * Generate an inner observable, subscribe to it,
 * pass the emitted value to the high-order observable so that it can
 * emit it to observer.
 */

of("eatteer", "vikler")
  .pipe(mergeMap(fetch)) // mergeMap takes the observable and flats it
  .subscribe({
    next: console.log,
    complete: () => console.log("on complete"),
  });
