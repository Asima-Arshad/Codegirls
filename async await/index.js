// async function practice(){
//    // return "this is async practice";
//    console.log("hello")
// }
// practice().then(
//     function(){return "this is error."}
// );
    
const getData = async() => {
	var y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);
console.log(8);
