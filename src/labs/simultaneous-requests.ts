import { ajax } from "rxjs/ajax";
import { forkJoin } from "rxjs";

const baseurl = "https://api.github.com/users/eatteer";

const user = () => ajax.getJSON(baseurl);
const repos = () => ajax.getJSON(`${baseurl}/repos`);
const gists = () => ajax.getJSON(`${baseurl}/gists`);

forkJoin({
  user: user(),
  repos: repos(),
  gists: gists(),
}).subscribe(console.log);
