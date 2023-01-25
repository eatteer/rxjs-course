import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

// skip(n) -> Do not emit the first n values.
// skip(3) -> Do not emit the first 3 values.
const click$ = fromEvent(document, "click").pipe(
  tap(() => console.log("click")),
  skip(1)
);

// takeUntil(observable$) -> Emit values until observable$ emits its first value.
const interval$ = interval(1000).pipe(takeUntil(click$));
interval$.subscribe({
  next: console.log,
  complete: () => console.log("on observable completed"),
});
