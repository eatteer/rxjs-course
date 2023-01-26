import { from, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { PlaceholderUser } from "../../interfaces/placeholder-user";

const url = (id: number) => `https://jsonplaceholder.typicode.com/users/${id}`;
const ids = [1, 2, 3, 4, 5, 6, 7];

const fetch = (id: number): Observable<PlaceholderUser> =>
  ajax.getJSON(url(id));

/**
 * Inner observables emitted values are delivered by the higher observable (from).
 * In other words, take all the inner streams of data, and merge them into one stream of data.
 */
from(ids)
  .pipe(map(fetch), mergeAll())
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("on complete"),
  });
