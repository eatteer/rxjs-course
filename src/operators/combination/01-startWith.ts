import { of, startWith } from "rxjs";

of(1, 2, 3).pipe(startWith(0)).subscribe(console.log);
