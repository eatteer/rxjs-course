import { Observable, Subject } from "rxjs";

/**
 * In MULTICAST observables the observable execution is stopped by calling
 * subscriber.complete() or subjectSubscription.unsubscribe().
 *
 * So unsubscribing the observers does not stop the observable execution, since the
 * the 1 to 1 relationship is between the observable and the subject.
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
});

console.log("subscribe observer 2 to subject");
const observerSubscription2 = subject$.subscribe({
  next: (value) => console.log(`observer 2 receive: ${value}`),
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
  console.log("unsubscribe subject");
  subjectSubscription.unsubscribe();
}, 6000);
