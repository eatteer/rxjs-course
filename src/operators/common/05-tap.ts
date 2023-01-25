import { from, tap, map } from "rxjs";

from([1, 2, 3, 4, 5])
  .pipe(tap((n) => console.log(`(1) tap -> ${n}`)))
  .pipe(
    map((n) => {
      const x = n * 10;
      console.log(`(1) map -> ${x}`);
      return x;
    })
  )
  .pipe(tap((n) => console.log(`(2) tap -> ${n}`)))
  .subscribe((n) => console.log(`next -> ${n}`));
