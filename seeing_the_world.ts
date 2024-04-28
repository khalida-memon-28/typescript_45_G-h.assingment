

// store the locations in a array.make sure the array is not in alphabetical order.
let places :String[] = ['makka', 'madina', 'baagdad', 'iraq' , 'Time square'];

//print your array in its original order.
console.log('original ' + places);

//print yourarray in alphabetical order without modifying the actule list.
console.log('copy ' + [...places].sort());

//show that your array is still in its original order by printing it.
console.log('original ' + places);

//print your array in rever alphabetical order with out changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log('original ' + places);

//reverse the order of your list.print the array to show that order has changed.
console.log('original ' + places.reverse());

//reverse the order of your list again.print the ist to show it's back to its original order.
console.log('original ' + places.reverse());

//short your array so it's stored in alphabetical order.print the arrayto shoe that its order has been changes.
console.log('original ' + places.sort());

//sort to change your array so it's stored in reverse alphabetical order.print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());