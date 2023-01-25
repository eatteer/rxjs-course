import { from, distinctUntilChanged } from "rxjs";

console.log("distinct until changed numbers");

const numbers$ = from([1, 1, 2, 3, 4, 4, 2, 5]).pipe(distinctUntilChanged());

numbers$.subscribe(console.log);

console.log("distinct until changed objects");
interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: "Nasa",
  },
  {
    name: "Nasa",
  },
  {
    name: "Tsukasa",
  },
  {
    name: "Tsukasa",
  },
  {
    name: "Aya",
  },
  {
    name: "Nasa",
  },
  {
    name: "Chitose",
  },
  {
    name: "Chitose",
  },
  {
    name: "Kaname",
  },
  {
    name: "Tsukasa",
  },
];

const characters$ = from(characters).pipe(
  distinctUntilChanged((previous, current) => previous.name == current.name)
);

characters$.subscribe(console.log);
