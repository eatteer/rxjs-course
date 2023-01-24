import { range } from "rxjs";

const range$ = range(1, 10);

range$.subscribe((value) => console.log(`On next: ${value}`));
