import { connect } from "@rxjs-insights/devtools/connect";
connect();

import { concatMap, interval, take } from "rxjs";

const interval$ = interval(1000).pipe(
  take(3),
  concatMap(() => interval(1000).pipe(take(3)))
);

interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("on complete"),
});
