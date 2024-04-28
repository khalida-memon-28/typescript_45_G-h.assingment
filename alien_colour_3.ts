// Alien colour#3 Turn your if_else chain form exercies 

let alienColours: String = "green";

//if the alien is green,print a message that the player earned 5 points.

// version 1 of th program
if(alienColours === "green"){
    console.log("player earned 5 points.");
}
else if(alienColours === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColours === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right colour")
}
// version 2 of the program.
alienColours ="yellow";

if(alienColours === "green"){
    console.log("player earned 5 points.");
}
else if(alienColours === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColours === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right colour")}


    // version 3 of the program.
alienColours ="Red";

if(alienColours === "green"){
    console.log("player earned 5 points.");
}
else if(alienColours === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColours === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right colour")}