let Guest_list :string[] = ['quaid-e-Azam','Fatima jinnah','Liaquait Ali khan'];

// for(let i=0; i<Guest_list.lenght; i++){
    // console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party .\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Liaquait Ali khan' ;

let new_Guest :string = 'Allama Iqbal';

Guest_list[2] = new_Guest ;

for(let i=2; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to the prty.`);

console.log('good News! we find Big Table so we are inviting 3 more guest.')

Guest_list.unshift('sir zia khan') ;
Guest_list.splice(2 , 0 , 'kamran tessori');
Guest_list.push('meri ami');

for(let i=0; i<Guest_list.length; i++){
    console.log('dear Mr, ' + Guest_list[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}