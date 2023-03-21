/* Write a program that generates a multiplication table for a given number using a for loop.*/
const prompt=require("prompt-sync")({sigint:true});
var num = parseInt(prompt("Enter a Number:"));

function multiplicationTable(num){
    for(var i=1;i<=10;i++){
        var multiply= i*num;
        console.log(`${num} * ${i} = ${multiply}`);
    }
}

multiplicationTable(num);