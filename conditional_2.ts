
// Equality and inequality Test.1
console.log("Equality test with strings", "Apple" === "Apple");
// Equality and inequality Test.2
console.log("inEquality test with strings", ("Apple") as String != "orange");

// test using the lower case funtion Test.3
console.log("Lowercase function test:", "HELLO".toLocaleLowerCase() === "hello");

//numberical test involving equality.
console.log("Equality test with numbers:", 26 === 26);
//Numberical test involving inequality.
console.log("inequality test wit numbers:", (26 as Number) != 35);

//greater than test.
console.log("Greater than test", 10 > 5);
// less than test.
console.log("lass than than test", 5 < 10);

//,greater than or equal to.
console.log("Greater than and equal to test:", 10>=10);
//less than or equal to
console.log("less than or equal to test: ", 5  <= 10 )

//tests using "and"  operator.
console.log("And operator test: ",5===5 && 10 >5);
//tests using  "or" operator.
console.log("or operator test: ",5===5 || false);

//test whether an item is in a array.
const fruits :String[] = ['banana','Apple','orange'];
console.log('test"banana" in the Array:', fruits.includes("banana"));

 //test whether an item is not in a Array.
 console.log('testing "Apple" is not in Array ', fruits.includes('Apple'));


