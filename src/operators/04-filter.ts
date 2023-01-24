import { range, filter, from, map, fromEvent } from "rxjs";

range(1, 10)
  .pipe(filter((n) => n % 2 === 0))
  .subscribe(console.log);

type Type = "hero" | "villain";

interface Character {
  type: Type;
  name: string;
}

const characters: Character[] = [
  { type: "hero", name: "Batman" },
  { type: "villain", name: "Joker" },
  { type: "hero", name: "Robin" },
];

from(characters)
  .pipe(
    filter((character) => character.type === "hero"),
    map((hero) => hero.name)
  )
  .subscribe(console.log);

fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(
    map((e) => e.key),
    filter((key) => key === "Enter")
  )
  .subscribe(() => console.log("Enter pressed"));
