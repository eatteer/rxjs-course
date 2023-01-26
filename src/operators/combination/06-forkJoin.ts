import { interval, take, from, of, delay, forkJoin } from "rxjs";

const numbers$ = from([1, 2, 3, 4, 5]);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c").pipe(delay(3000));

forkJoin([numbers$, interval$, letters$]).subscribe(console.log);
