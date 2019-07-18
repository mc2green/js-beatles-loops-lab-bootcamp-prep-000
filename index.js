// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var counter = 0;
var sentence;
var band = [];

function theBeatlesPlay(musicians, instruments){
var musicianString;
var musicianInstrument=[];
for(var i=0; i<musicians.length; i++){
musicianString= musicians[i] + ‘ plays ‘ + instruments[i];
musicianInstrument[i]=musicianString;
}
return musicianInstrument;
}

  
