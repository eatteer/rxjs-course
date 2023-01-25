import { fromEvent, interval, tap, sample, from } from "rxjs";

/**
 * - interval$ is the SOURCE OBSERVABLE.
 * - sample() returns an OUTPUT OBSERVABLE.
 *
 * interval$ -> [value] -> sample()
 * 1. interval$ emits a value to sample().
 * 2. sample() receives the value but only emits it when $click has emitted
 *    a value.
 */

const click$ = fromEvent(document, "click").pipe(
  tap(() => console.log("click"))
);

const interval$ = interval(1000).pipe(
  tap((value) => console.log(`tap: ${value}`)),
  sample(click$)
);

interval$.subscribe({ next: (value) => console.log(`receive: ${value}`) });
