import { Observable, Observer, Subject, take, tap } from "rxjs";

const observer1: Observer<number> = {
  next: (value) => console.log(`on next: ${value}`),
  error: null,
  complete: () => console.log("on complete observer 1"),
};

const observer2: Observer<number> = {
  next: (value) => console.log(`on next: ${value}`),
  error: null,
  complete: () => console.log("on complete observer 2"),
};

// interval$ pipes take() and take return an observable, so:
// take$ <- subject$ <- observer.
// take$ is the parent observable that has subscribed subject$
// and subject has subcribed observables.

// When take$ completes then subject$ completes then observables completes.
const interval$ = new Observable<number>((subscriber) => {
  console.log("Start observable execution");

  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  // setTimeout(() => {
  //   console.log("complete execution");
  //   subscriber.complete();
  // }, 2000);

  return () => {
    console.log("Stop observable execution");
    clearInterval(intervalId);
  };
}).pipe(
  tap((value) => console.log(`tap: ${value}`)),
  take(3)
);

const subject$ = new Subject<number>();
const subscriptionConnect = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer1);
const subscription2 = subject$.subscribe(observer2);
