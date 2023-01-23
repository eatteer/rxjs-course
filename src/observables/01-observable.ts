import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
  next: (value) => console.log(`On next: ${value}`),
  error: (error) => console.warn("On error:"),
  complete: () => console.log("On complete"),
};

const observable$ = new Observable<string>((subscriber) => {
  console.log("Start observable execution");

  subscriber.next("Push: Hello");
  subscriber.next("Push: World");

  console.log("Complete observable execution");
  subscriber.complete();
});

observable$.subscribe(observer);
