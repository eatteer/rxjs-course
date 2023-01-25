import { mergeMap, of, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "./interfaces/github-user";

const url = (un: string) => `https://api.github.com/users/${un}`;
const fetch = (un: string): Observable<GithubUser> => ajax.getJSON(url(un));

/**
 * Generate an inner observable, subscribe to it,
 * pass the emitted value to the high-order observable so that it can
 * emit it to observer.
 */

of("eatteer")
  .pipe(mergeMap(fetch)) // mergeMap takes the observable and flats it
  .subscribe({
    next: console.log,
    complete: () => console.log("on complete"),
  });
