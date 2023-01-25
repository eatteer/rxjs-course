import { fromEvent, map, debounceTime, distinctUntilChanged } from "rxjs";
const $input = document.querySelector("input");

/**
 * - input$ is the SOURCE OBSERVABLE.
 * - debounceTime() returns an OUTPUT OBSERVABLE.
 *
 * input$ -> [value] -> debounceTime()
 * 1. input$ emits a value to debounceTime().
 * 2. debounceTime() receives the value and emits it
 *    after a particular time span has passed without another received value.
 */
const input$ = fromEvent<InputEvent>($input, "input").pipe(
  debounceTime(1000),
  map((e) => {
    const target = e.target as HTMLInputElement;
    return target.value;
  }),
  distinctUntilChanged()
);
input$.subscribe(console.log);
