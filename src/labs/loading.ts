import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

const $body = document.querySelector("body");

const $loading = document.createElement("div");
$loading.textContent = "Loading...";
$loading.classList.add("loading");

const url = "https://reqres.in/api/users/2?delay=3";

ajax
  .getJSON(url)
  .pipe(startWith(true))
  .subscribe((value) => {
    if (value === true) $body.append($loading);
    else {
      console.log(value);
      $loading.remove();
    }
  });
