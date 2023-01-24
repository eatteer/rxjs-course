import { Observer, Observable } from "rxjs";

/**
 * A unicast observable execution can be stopped either by calling:
 * 1. subscriber.complete().
 * 2. subscription.unsubscribe().
 *
 * In every case the observer.unsubscribe() is called.
 * Just in the case subscriber.complete() the observer.complete() is called (Implicitly).
 */

/**
 * Here, each observable execution is attached to a particular observer.
 * The observable context can be stopped by the observable itself (subscriber) or the observer.
 */

const observer: Observer<number> = {
  next: (value) => console.log(`On next: ${value}`),
  error: () => console.warn(`On error`),
  complete: () => console.log(`On complete`),
};

const interval$ = new Observable<number>((subscriber) => {
  // Observable execution for a particular observer.
  console.log("Start observable execution");

  let count = 1;
  const intervalId = setInterval(() => {
    console.log(`Push next: ${count}`);
    subscriber.next(count);
    count++;
  }, 1000);

  // setTimeout(() => {
  //   console.log(`Complete observable execution`);
  //   // Tell the particular observer to completa and unsubscribe.
  //   subscriber.complete();
  // }, 3000);

  // Callback to be called when the particular observable execution will be stopped.
  return () => {
    console.log(`Stop observable execution`);
    clearInterval(intervalId);
  };
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);

setTimeout(() => {
  console.log("Unsubscribe observer 1");
  subscription1.unsubscribe();
}, 5000);

setTimeout(() => {
  console.log("Unsubscribe observer 2");
  subscription2.unsubscribe();
}, 10000);
