// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    let dBlocks = Math.abs(blocks -42);
    return dBlocks;
}
function distanceTravelledInFeet(street1, street2){
    return(Math.abs(street1 - street2) * 264)
}
function distanceFromHqInFeet(blocks){
    let diBlocks = Math.abs(blocks -42);
    let blocksFeet = diBlocks * 264
    return blocksFeet;
}
function calculatesFarePrice(start, destination){
   let finalFeet = (Math.abs(start - destination) * 264);

   if (finalFeet < 400){
       return 0;
   } else if ( finalFeet > 400 && finalFeet <2000){
       return ((finalFeet-400) * .02)
   } else if (finalFeet > 2000 && finalFeet <2500){
       return 25;
   } else 
   return 'cannot travel that far'
}
