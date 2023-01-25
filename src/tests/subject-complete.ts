import { Observable, Subject } from "rxjs";

/**
 * Call subject$.complete() does not complete the observable execution,
 * since the subject works as an intermediate observer.
 *
 * The only known way to stop the observable execution is calling
 * subscriber.complete() or the subscription.unsubscribe()
 * where the subscription is associated subscription of
 * the direct observer (1 to 1 relationship).
 */

const intervalMs = 1000;
const interval$ = new Observable<number>((subscriber) => {
  console.log("start observable");
  let count = 0;

  const intervalId = setInterval(() => {
    // Push value to the observer
    console.log(`push ${count}`);
    subscriber.next(count);
    count++;
  }, intervalMs);

  // Cleanup function
  return () => {
    console.log("complete observable");
    clearInterval(intervalId);
  };
});

// Create multicast observable
console.log("subscribe subject to observable");
const subject$ = new Subject<number>();
const subjectSubscription = interval$.subscribe(subject$);

console.log("subscribe observer 1 to subject");
const observerSubscription1 = subject$.subscribe({
  next: (value) => console.log(`observer 1 receive: ${value}`),
  complete: () => console.log("observer 1 complete"),
});

console.log("subscribe observer 2 to subject");
const observerSubscription2 = subject$.subscribe({
  next: (value) => console.log(`observer 2 receive: ${value}`),
  complete: () => console.log("observer 2 complete"),
});

setTimeout(() => {
  console.log("unsubscribe observer 1");
  observerSubscription1.unsubscribe();
}, 3000);

setTimeout(() => {
  console.log("unsubscribe observer 2");
  observerSubscription2.unsubscribe();
}, 4000);

setTimeout(() => {
  // Do not complete the observable execution.
  // The subject is just an intermediate observer
  // and observers can´t stop the observable execution they are
  // subscribed to.
  console.log("complete subject");
  subject$.complete();
}, 6000);
