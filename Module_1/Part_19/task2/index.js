import "./index.css";
import jsLogo from "./javascript-logo.svg";

import { sum } from "./main";

const array = [1, 2, 3].map((i) => i + 1);

function hello(...args) {
  console.log("####: Hello Rollup!", args[0], args[1]);
}

hello(sum(1, 2));

const img = document.createElement("img");
img.src = jsLogo;
document.querySelector("body").append(img);
console.log(jsLogo);
