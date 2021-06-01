"use strict";

// Solution 1
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
    color = `${first}${second}`;
  }
  
  return color;
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(32, 104, 298));
console.log(rgb(16, 192, 213));

// Solution 2
function rgb2(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// Solution 3
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}