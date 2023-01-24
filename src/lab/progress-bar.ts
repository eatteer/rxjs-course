import { fromEvent, map } from "rxjs";

const $progressBarLab = document.getElementById("progress-bar-lab");
$progressBarLab.style.display = "block";

const $body = document.querySelector("body");
const $progressBar = document.createElement("div");
$progressBar.classList.add("progress-bar");
$body.append($progressBar);

interface ScrollData {
  scrollTop: number;
  scrollHeight: number;
  clientHeight: number;
}

const calculateScrollPercent = ({
  scrollTop,
  scrollHeight,
  clientHeight,
}: ScrollData): number => {
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

fromEvent(document, "scroll")
  .pipe(
    map((e: any) => {
      const { documentElement } = e.target;
      const { scrollTop, scrollHeight, clientHeight } = documentElement;
      const scrollData: ScrollData = {
        scrollTop,
        scrollHeight,
        clientHeight,
      };
      return scrollData;
    }),
    map(calculateScrollPercent)
  )
  .subscribe((percent) => {
    $progressBar.style.width = `${percent}%`;
  });
