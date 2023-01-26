import { combineLatest, fromEvent, debounceTime, map } from "rxjs";

/**
 * @param input Input to observe.
 * @returns Observable that emits a 1000ms debounced value.
 */

const createInputValueObservable = (input: HTMLInputElement) =>
  fromEvent<InputEvent>(input, "input").pipe(
    debounceTime(1000),
    map((event) => (event.target as HTMLInputElement).value)
  );

const createNameInput = () => {
  const $input = document.createElement("input");
  $input.placeholder = "Name";
  return $input;
};

const nameone = createNameInput();
const nametwo = createNameInput();
const namethree = createNameInput();

document.querySelector("body").append(nameone, nametwo, namethree);

combineLatest([
  createInputValueObservable(nameone),
  createInputValueObservable(nametwo),
  createInputValueObservable(namethree),
]).subscribe(console.log);
