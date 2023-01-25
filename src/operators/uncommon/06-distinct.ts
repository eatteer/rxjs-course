import { from } from "rxjs";

const numbers$ = from([1, 1, 2, 3, 4, 4, 2, 5]);

numbers$.subscribe(console.log);
