let str = "Hello, world!"; 
let inverted = ""; 

for (let i = str.length - 1; i >= 0; i--) {
  inverted += str[i];
}

console.log(inverted); 
