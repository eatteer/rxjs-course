import { from, distinctUntilKeyChanged } from "rxjs";

console.log("distinct until changed key objects");
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

const characters$ = from(characters).pipe(distinctUntilKeyChanged("name"));

characters$.subscribe(console.log);
