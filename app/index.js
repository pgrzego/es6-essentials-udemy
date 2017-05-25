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

let spread1 = [7, 8, 9];
let spread2 = [6, ...spread1, 10];
console.log("Spread operator: ", spread2);
function print(a, b, c)
{
	console.log(a, b, c);
}
let spread3 = [1, 2, 3];
print(...spread3);
function print2(...z)
{
	console.log(z);
}
print2(1, 2, 3);

let destrArray = [100, 200, 300, 400];
let [destr1, destr2, ...destr3] = destrArray;
console.log(destr1, destr2, destr3);
let param1 = false;
let param2 = 2;
let destrObject = {param1: true, param2: 6};
//let param1 = destrObject.param1;
//let param2 = destrObject.param2;
({ param1, param2 } = destrObject); // Parenthesis needed as without them it would be consodered as a scope block
console.log(param1, param2);