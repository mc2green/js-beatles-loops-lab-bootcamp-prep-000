// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments){
  var counter = 0;
  var sentence;
  var band = [];
  for (counter; counter < musicians.length;counter++ ){
    sentence = musicians[counter] + "plays" + instruments[counter];
    band[counter] = sentence;
  }
  return band[counter];
}

function johnLennonFacts(facts){
  var counter = 0;
  var exclamation = "";
  while(counter < facts.length){
    exclamation = facts[counter] + "!!!";
    counter++;
  }
  return exclamation
  
}
function iLoveBeatles(){
  
}



  
