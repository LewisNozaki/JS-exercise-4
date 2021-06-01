"use strict";

function rgb(r, g, b){
  // complete this function  
  let rgbArr = [r, g, b];
  
  console.log(rgbArr);
  
  rgbArr.map(color => {
    if (color === 0) {
      color = "00";
    }
    
    if (color >= 255) {
      color = "FF"
    }
    
    
  })
}