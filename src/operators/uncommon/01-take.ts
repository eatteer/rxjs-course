import { Observable, Subject, take, tap } from "rxjs";

const interval$ = new Observable<number>((subscriber) => {
  console.log("start observable execution");

  let count = 0;
  const intervalId = setInterval(() => {
    console.log(`push: ${count}`);
    subscriber.next(count++);
  }, 1000);

  return () => {
    console.log("complete observable execution");
    clearInterval(intervalId);
  };
}).pipe(
  tap((value) => console.log(`tap: ${value}`)),
  take(3) // Take the first three elements then completes the observable.
);

const subject$ = new Subject<number>();
const subjectSubscription = interval$.subscribe(subject$);

const observerSubscription1 = subject$.subscribe({
  next: (value) => console.log(`observer 1 receive: ${value}`),
  error: null,
  complete: () => console.log("complete observer 1"),
});

const observerSubscription2 = subject$.subscribe({
  next: (value) => console.log(`observer 2 receive: ${value}`),
  error: null,
  complete: () => console.log("complete observer 2"),
});
