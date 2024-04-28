let Guest_list :string[] = ['quaid-e-Azam','Fatima jinnah','Liaquait Ali khan'];

// for(let i=0; i<Guest_list.lenght; i++){
    // console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party .\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Liaquait Ali khan' ;

let new_Guest :string = 'Allama Iqbal';

Guest_list[2] = new_Guest ;

// for(let i=2; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the prty.`);
// console.log('good News! we find Big Table so we are inviting 3 more guest.')

// array mai 3 guest add karay hain.
Guest_list.unshift('sir zia khan') ;
Guest_list.splice(2 , 0 , 'kamran tessori');
Guest_list.push('meri ami');

// yaha par 6 Guest ko array karwaya hai.
// for(let i=0; i<Guest_list.length; i++){
    // console.log('dear Mr, ' + Guest_list[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
// sorry message to guest for not inviting.
// console.log('\nsorry we can not arrange big table, only Two peoples will be invited.');

// yaha par main nay Guest remove karay hain .
while(Guest_list.length > 2){
let remove_Guest = Guest_list.pop();
// console.log(`sorry Mr. ${remove_Guest}, you are not invite for dinner.`);
}
//humare bachay howe 2 invited Guest.
// for(let i=0; i<Guest_list.length; I++)[
    // console.log('dear Mr. ' + Guest_list[i]+ ',\n\nyou are still invited.\n\nThankyou\n\n')
// ]


//main ny sare guest array se remove kar diye.
Guest_list.splice(0, 2);
console.log(Guest_list);


// EXercies 19
//print a massage indicating the number of people you are inviting to dinner.

console.log(`total number of Guest Are: ${Guest_list.length}`);