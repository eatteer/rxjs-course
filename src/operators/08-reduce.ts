import { interval, take, reduce } from "rxjs";

// JS Reducer
const reducer = (accumulator: number, current: number) => accumulator + current;
const numbers = [1, 2, 3, 4, 5];
const initial = 0;
const result = numbers.reduce(reducer, initial);
console.log(result);

// RXJS Reducer
// interval starts at 0
// take(3) -> reduce -> 0 + 1 + 2 = 3
const interval$ = interval(1000).pipe(take(3), reduce(reducer));
const subscription = interval$.subscribe({
  next: (value) => console.log(`on next: ${value}`),
  complete: () => console.log("completed"),
});
