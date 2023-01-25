import { interval, first, tap, fromEvent, map } from "rxjs";

interval(1000)
  .pipe(
    tap((value) => console.log(`tap: ${value}`)),
    first() // Take the first element and completes the observable
  )
  .subscribe({ next: (value) => console.log(`receive ${value}`) });

interval(1000)
  .pipe(
    tap((value) => console.log(`tap: ${value}`)),
    first((value) => value > 0 && value % 2 === 0) // Take the first element then completes the observable.
  )
  .subscribe({ next: (value) => console.log(`receive ${value}`) });

const click$ = fromEvent<PointerEvent>(document, "click").pipe(
  tap(() => console.log("tap"))
);

const first$ = click$.pipe(
  map(({ clientX, clientY }) => ({ clientX, clientY })),
  first(({ clientY }) => clientY >= 300)
);

first$.subscribe(console.log);
