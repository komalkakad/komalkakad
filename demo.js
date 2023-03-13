let arr = [23, 45, 89];
let a;
do{
	a = prompt("Enter the value: ");
	a = Number.parseInt(a);
	arr.push(a);
}while(a!=0)

console.log(arr);
