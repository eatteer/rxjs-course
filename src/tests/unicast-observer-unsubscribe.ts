import { Observable } from "rxjs";

/**
 * In UNICAST observables the observable execution is stopped either by calling
 * subscriber.complete() or observerSubscription.unsubscribe().
 *
 * This is true because the 1 to 1 relationship is between the observable
 * and the unique observer.
 */

const intervalMs = 1000;
const interval$ = new Observable((subscriber) => {
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

console.log("subscribe observer to observable");
const observerSubscription = interval$.subscribe({
  next: (value) => console.log(`receive: ${value}`),
});

setTimeout(() => {
  console.log("unsubscribe observer");
  observerSubscription.unsubscribe();
}, 3000);
