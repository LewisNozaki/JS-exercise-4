"use strict";

function rgb(r, g, b){
  let h1 = convert(r);
  let h2 = convert(g);
  let h3 = convert(b);
  
  return (h1 + h2 + h3);
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

      if (first >= 10 && first <= 14) {
        first = alpha[parseInt(first.toString()[1])];
      } else if (first > 14) {
        first = "F";
      }

      if (second >= 10 && second <= 14) {
        second = alpha[parseInt(second.toString()[1])];
      } else if (second > 14) {
        second = "F";
      }

      // console.log("remainder: ", remainder)
      // console.log("first: ", first);
      // console.log("second:" , second)
      color = (first + second);
    }
  }
  
  return color;
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));