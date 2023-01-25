import { fromEvent, tap, auditTime, map } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click").pipe(
  map(({ clientX, clientY }) => ({ clientX, clientY })),
  tap((value) => console.log("tap", value)),
  // Emit the last value in a 2000ms window.
  // The window is open when click$ emits a value.
  auditTime(2000)
);

click$.subscribe({ next: (value) => console.log("receive", value) });
