import { connect } from "@rxjs-insights/devtools/connect";
connect();

import { fromEvent, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1?arg=";
const $input = document.querySelector("input");

/**
 * switchMap()
 *
 * Subscribe to each generated inner observable and flatten it
 * always completing the previous one.
 */

const input$ = fromEvent($input, "input").pipe(
  map((event) => (event.target as HTMLInputElement).value),
  switchMap(() => ajax.getJSON(url))
);
input$.subscribe({ next: (value) => console.log(value) });
