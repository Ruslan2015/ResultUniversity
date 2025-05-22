import "../index.css";
import JS_IMAGE from "../assets/javascript-logo.svg";

console.log("Hello World!");

const img = document.createElement("img");
img.src = JS_IMAGE;
document.querySelector("body").append(img);
