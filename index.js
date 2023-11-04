// Code your solution in this file!
  
function distanceFromHqInBlocks (someValue){
  if (someValue>42){
return someValue - 42

  }
  else{
return 42 - someValue
  }
}
  


  function distanceFromHqInFeet(someValue){
    
    return distanceFromHqInBlocks(someValue)*264;
  
}


  function distanceTravelledInFeet(start,destination){
    
  
  if (start>destination){
    return (start-destination)*264

  }
  return (destination- start)*264
}


  function  calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start,destination)
// if custermer travels 400 feet the fare is free
 if (distance<400){
    return 0
 } 
 if (distance< 2000){
    return 2.56
 }
 
if(distance<2500){
return 25

}else{
return'cannot travel that far'

}

 

// For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).
  

//Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. 



//Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.


}