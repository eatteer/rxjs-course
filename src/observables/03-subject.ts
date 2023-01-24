import { Observer, Observable, Subject } from "rxjs";

/**
 * An multicast observable execution can be stopped by calling:
 * 1. subscritionConnect.complete().
 *
 * subscriptionConnect come from observable$.subscribe(subject$)
 */

/**
 * Here, the observable execution is attached to many observers.
 * The observable context can only be stopped by the observable itself (subscriber).
 */

const observer: Observer<number> = {
  next: (value) => console.log(`On next: ${value}`),
  error: () => console.warn(`On error`),
  complete: () => console.log(`On complete`),
};

// Source of data
const interval$ = new Observable<number>((subscriber) => {
  console.log("Start observable execution");

  const intervalId = setInterval(() => {
    let number = Math.random();
    console.log(`Push next: ${number}`);
    subscriber.next(number);
  }, 1000);

  // setTimeout(() => {
  //   console.log("Complete observable execution");
  //   subscriber.complete();
  // }, 2000);

  // Callback to be called when the shared observable execution will be stopped.
  return () => {
    console.log(`Stop observable execution`);
    clearInterval(intervalId);
  };
});

// Make a multicast observable
// by subscribing subject to the observable.
const subject$ = new Subject<number>();
const subscriptionConnect = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  console.log("Complete subject");

  // Tell the observers to complete and unsubscribe.
  subject$.complete();
}, 5000);

// setTimeout(() => {
//   console.log("Unsubscribe observer 1");
//   subscription1.unsubscribe();
// }, 5000);

// setTimeout(() => {
//   console.log("Unsubscribe observer 2");
//   subscription2.unsubscribe();
// }, 10000);
