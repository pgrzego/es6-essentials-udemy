let a='hello';

console.log(a);

{
	let a = 'goodbye';
	console.log('a inside scope is ', a);
}


const constArray = [1, 2, 3];
constArray.push(4);
console.log("Constant array can be manippulated: ", constArray);

let b=`${a} world`;
console.log("Template literals: ", b);