import { range, map, fromEvent } from "rxjs";

range(1, 5)
  .pipe(map((n) => n * 10))
  .subscribe((n) => console.log(`On next: ${n}`));

fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(map((e) => e.code))
  .subscribe((value) => console.log(value));
