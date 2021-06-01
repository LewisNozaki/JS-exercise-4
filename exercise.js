"use strict";

function rgb(r, g, b){
  // complete this function  
  let h1 = convert(r);
  // let h2 = convert(g);
  // let h3 = convert(b);
  
  console.log(h1);
}

function convert(color) {
  let alpha = ["A", "B", "C", "D", "E"];
  
  if (color <= 0) {
    color = "00";
  } else if (color >= 255) {
    color = "FF"
  } else {
    color = (color / 16);

    if (color % 2 !== 0) {
      let remainder = color - Math.floor(color);
      let first = color - remainder;
      let second = remainder * 16;

      console.log(remainder);
      console.log(first);
      console.log(second);
    }
  }
  
  return color;
}

console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300,255,255))
console.log(rgb(173,255,47))