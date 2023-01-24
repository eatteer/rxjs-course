import { fromEvent } from "rxjs";

// DOM Events
const click$ = fromEvent<PointerEvent>(document, "click");
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

click$.subscribe((event) => console.log({ x: event.x, y: event.y }));
keyup$.subscribe((event) => console.log({ code: event.code }));
