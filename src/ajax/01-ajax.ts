import { ajax } from "rxjs/ajax";
import { catchError, map, of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

ajax
  .get(url)
  .pipe(
    map((ajaxResponse) => ajaxResponse.response),
    catchError((error) => of([]))
  )
  .subscribe({
    next: (value) => console.log("on next", value),
    error: (error) => console.log("on error", error),
    complete: () => console.log("on complete"),
  });
