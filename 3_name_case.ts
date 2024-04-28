let  personname : String ='';

personname = prompt ('what is your name?') || '';


let lowercase : String = personname.toLocaleLowerCase();

let uppercase : String = personname.toUpperCase();

let titlecase : string = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ).join(' ')

if (personname !== null && personname !== '') {alert (` hello ${personname}, Here are your name :
lowercase ${lowercase} 
uppercase ${uppercase}
titlecase ${titlecase}`)
    
}
else{ alert ('please fill your name !')}
