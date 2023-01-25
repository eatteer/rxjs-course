import { fromEvent, interval, takeUntil } from "rxjs";

const click$ = fromEvent(document, "click");

const interval$ = interval(1000).pipe(takeUntil(click$)).subscribe(console.log);
