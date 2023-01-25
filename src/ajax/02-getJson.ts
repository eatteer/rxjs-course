import { ajax } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

ajax
  .getJSON(url)
  .subscribe({ next: (value) => console.log(`on next ${value}`) });
