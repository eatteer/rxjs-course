import { fromEvent, tap } from "rxjs";
/**
 * 1. User clicks down
 * 2. Take time
 * 3. User clicks up
 */

let start: number;
let end: number;
let miliseconds: number;
let seconds: number;

const clickDown$ = fromEvent(document, "mousedown").pipe(
  tap(() => (start = Date.now()))
);

const clickUp$ = fromEvent(document, "mouseup").pipe(
  tap(() => {
    end = Date.now();
    miliseconds = end - start;
    seconds = miliseconds / 1000;
    console.log(seconds);
  })
);

clickDown$.subscribe({ next: () => console.log("click down") });
clickUp$.subscribe({ next: () => console.log("click up") });
