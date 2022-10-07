function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6,2,sum));

setTimeout(function() {
    console.log("Hola Mundo JS");
}, 2000);

function gretting(name){
    console.log(`hola ${name}`);
}

setTimeout(gretting, 2000, 'OSCAR');