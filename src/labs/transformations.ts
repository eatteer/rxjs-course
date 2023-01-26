import {
  fromEvent,
  map,
  mergeMap,
  switchMap,
  concatMap,
  exhaustMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

const endpoint = "https://reqres.in/api/login?delay=1";
const credentials = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};
const fetch = () =>
  ajax
    .post(endpoint, credentials)
    .pipe(map((ajaxres) => ajaxres.response["token"]));

const submit$ = fromEvent(document, "click").pipe(concatMap(fetch));

submit$.subscribe({ next: (token) => console.log(token) });
