import { fromEvent, takeWhile } from "rxjs";

fromEvent<PointerEvent>(document, "click")
  .pipe(takeWhile((e) => e.clientY <= 150))
  .subscribe({ next: (e) => console.log(e.clientY) });
