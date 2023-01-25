import { mergeMap, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = (id: string) => `https://api.github.com/users/${id}`;
const fetch = (username) => ajax.getJSON(url(username));

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
