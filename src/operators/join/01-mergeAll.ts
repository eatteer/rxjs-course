import { fromEvent, map, debounceTime, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = (q: string) => `https://api.github.com/search/users?q=${q}`;

const $input = document.querySelector("input");

const input$ = fromEvent<InputEvent>($input, "input").pipe(
  debounceTime(1000),
  map((event) => (event.target as HTMLInputElement).value),
  /**
   * ajax.get returns an observable.
   */
  map((q) => ajax.get(url(q))),
  /**
   * Emit the values of the inner observable (returned by ajax.get)
   * on the output observable (input$).
   */
  mergeAll(),
  map((ajaxres) => ajaxres.response["items"])
);

input$.subscribe({
  next: console.log,
  complete: () => console.log("on complete"),
});
