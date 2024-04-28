let Guest_list :String[] =['Quaid-e-Azam','Fatima jinnah','Liaquait Ali'];

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n')
    
}

let absent_Guest :String = 'Liaquait Ali khan';
let  new_Guest :String = 'Allama Iqbal' ;

Guest_list[2] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] +'\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(` Mr. ${absent_Guest} is not coming to the party`)