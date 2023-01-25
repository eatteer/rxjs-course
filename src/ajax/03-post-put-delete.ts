import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax.get(url).subscribe(console.log);
ajax.post(url, { name: "Tsukasa" }).subscribe(console.log);
ajax.put(url, { name: "Nasa" }).subscribe(console.log);
ajax.delete(url).subscribe(console.log);
