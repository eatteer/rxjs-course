import { Observer, Observable, Subject } from "rxjs";

/**
 * An shared observable execution can be stopped by calling:
 * 1. subscriber.complete().
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

const interval$ = new Observable<number>((subscriber) => {
  console.log("Start observable execution");

  const intervalId = setInterval(() => {
    let number = Math.random();
    console.log(`Push next: ${number}`);
    subscriber.next(number);
  }, 1000);

  // Callback to be called when the shared observable execution will be stopped.
  return () => {
    console.log(`Stop observable execution`);
    clearInterval(intervalId);
  };
});

// Make a shared observable execution
const subject$ = new Subject<number>();
interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  console.log("Unsubscribe observer 1");
  subscription1.unsubscribe();
}, 5000);

setTimeout(() => {
  console.log("Unsubscribe observer 2");
  subscription2.unsubscribe();
}, 10000);
