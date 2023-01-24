import { of, from } from "rxjs";

const of$ = of("Tsukasa");
const from$ = from("Tsukasa");

const observer = {
  next: (value) => console.log(`On next: ${value}`),
};

console.log("of");
of$.subscribe(observer);

console.log("from");
from$.subscribe(observer);

console.log("from -> fetch");
const userEndpoint = "https://api.github.com/users/eatteer";
const fetchGithubUser = from(fetch(userEndpoint));
fetchGithubUser.subscribe(async (response) => {
  const user = await response.json();
  console.log(user);
});
