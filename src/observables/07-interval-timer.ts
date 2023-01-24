import { interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log(`On next: ${value}`),
  error: null,
  complete: () => console.log("On complete"),
};

// Its nature is asynchronous
const interval$ = interval(1000);
const timer$ = timer(2000);

console.log("Start");
timer$.subscribe(observer);
// interval$.subscribe((value) => console.log(`On next: ${value}`));
console.log("End");
