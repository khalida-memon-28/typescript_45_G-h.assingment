
//creat avariable called alien_colour.
let alien_colour :String = 'green';

//write an if statement to test whrther the alien's colour is green.if it it is,print a message that the player just earned 5 points.

if(alien_colour === 'green'){
 console.log("player just earned 5 points !");
}

// write one version of this program that passes the if test and another that fails.
 alien_colour = 'yellow';

 //the version that fails will have no output.
if(alien_colour === 'green'){
    console.log("player just earned 5 points !");
}
