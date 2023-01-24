import { from, reduce, scan } from "rxjs";

const reducer = (accumulator: number, current: number) => accumulator + current;
const numbers = [1, 2, 3, 4, 5];
const initial = 0;

const observer = {
  next: (value) => console.log(`on next: ${value}`),
  complete: () => console.log("completed"),
};

console.log("reduce");
const reduce$ = from(numbers).pipe(reduce(reducer, initial));
reduce$.subscribe(observer);

console.log("scan");
const scan$ = from(numbers).pipe(scan(reducer, initial));
scan$.subscribe(observer);
