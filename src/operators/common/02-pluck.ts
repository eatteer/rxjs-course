import { fromEvent, pluck } from "rxjs";

fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(pluck("key"))
  .subscribe((value) => console.log(value));
