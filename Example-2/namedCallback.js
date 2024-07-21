function namedCallback(){
   console.log("Named callback called.");
}

function testFunction(callback){
   callback();
}

testFunction(namedCallback);
