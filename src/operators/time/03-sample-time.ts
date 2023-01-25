import { fromEvent, sampleTime, map } from "rxjs";

/**
 * - input$ is the SOURCE OBSERVABLE.
 * - sampleTime() returns an OUTPUT OBSERVABLE.
 *
 * input$ -> [value] -> sampleTime()
 * 1. input$ emits a value to sampleTime().
 * 2. sampleTime() receives the value but emits the most recently value
 *    whithin period interval times.
 */
const click$ = fromEvent<PointerEvent>(document, "click").pipe(
  sampleTime(2000),
  map(({ clientX, clientY }) => ({ clientX, clientY }))
);
click$.subscribe(console.log);
