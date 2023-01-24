import { fromEvent, mapTo, pluck } from "rxjs";

fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(pluck("key"))
  .subscribe((value) => console.log(`pluck -> key: ${value}`));

// Pluck nested property
fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(pluck("target", "baseURI"))
  .subscribe((value) => console.log(`pluck -> target.baseURI: ${value}`));

// Map to
fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(mapTo("Tsukasa"))
  .subscribe((value) => console.log(`mapTo -> ${value}`));
