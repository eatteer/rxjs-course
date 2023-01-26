import { fromEvent, merge, pluck } from "rxjs";

merge(fromEvent(document, "click"), fromEvent(document, "keyup"))
  .pipe(pluck("type"))
  .subscribe(console.log);
