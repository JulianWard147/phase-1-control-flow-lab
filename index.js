function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return('This one is on me!')}
    else if (feet <= 2000){
    return('That will be twenty bucks.')}
    else if (feet <= 2500){
    return('I will gladly take your thirty bucks.')}
    else if (feet > 2500){
    return('No can do.')}
}

// minor note, there's some ambiguity in the test instructions. Case for a free ride is specified as less than or equal to 400, 
// and by plain meaning 'between 400 and 2000' should be exclusive (that is, 400 should still be free, 2000 should not be $20)
// BUT the band for $30 is specified as 'over 2000', leaving a gap at a journey of exactly 2000.
// To fully meet the case laid out in the test file, a ride of 2000 should be a special case (return null?)
// Also, since the intructions state that we should charge 30 for distances over 2000 feet (with no caveats about an upper bound)
// It implies that the appropriate behavior if a customer asks for a ride over 2500 would be to both charge them $30 bucks and scoot off without giving them a ride.
// I have written the code to meet a non-pedant's understanding of the conditions in the test file. :) 

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return("Ok, sounds good.")}
  else{
    return("No go.")}
  }


function switchOnCharmFromTip(tip){
  let reply
  switch(tip){
    case 'generous':
      reply = "Thank you so much."
      break
    case 'not as generous': 
      reply = "Thank you."
      break
    default:
      reply = "Bye."}
  
  return(reply)
}
