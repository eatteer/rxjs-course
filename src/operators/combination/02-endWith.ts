import { of, endWith } from "rxjs";

of(1, 2, 3).pipe(endWith(4)).subscribe(console.log);
