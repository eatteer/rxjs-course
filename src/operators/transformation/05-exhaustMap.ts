import { connect } from "@rxjs-insights/devtools/connect";
import { exhaustMap, interval, take } from "rxjs";
connect();

const interval$ = interval(1000).pipe(
  take(3),
  exhaustMap(() => interval(1000).pipe(take(3)))
);

interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("on complete"),
});
