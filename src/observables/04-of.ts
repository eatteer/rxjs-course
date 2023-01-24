import { of } from "rxjs";

// const observable$ = of(
//   [1, 2],
//   { a: 1, b: 2 },
//   () => {},
//   true,
//   Promise.resolve(true)
// );

const observable$ = of(1, 2, 3, 4, 5, 6);

console.log("Start observable");
observable$.subscribe({
  next: (value) => console.log(`On next: ${value}`),
  error: null,
  complete: () => console.log(`On complete`),
});
console.log("End observable");
