import { asyncScheduler } from "rxjs";

const callback = () => console.log("Running callback");
const namedCallback = (name: string) => console.log(`Running ${name} callback`);

const ms = 1000;

// setTimeout
asyncScheduler.schedule<void>(callback, ms);
asyncScheduler.schedule<string>(namedCallback, ms, "Tonikaku");

// setInterval
const subscription = asyncScheduler.schedule(
  function (count: number) {
    console.log(`Running asyncScheduler interval (${count})`);
    this.schedule(++count, ms);
  },
  ms,
  0
);

asyncScheduler.schedule(() => {
  console.log("Unsubscribe asyncScheduler interval ");
  subscription.unsubscribe();
}, 6000);
