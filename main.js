document.write("Array of object -filter "+"<br>");
document.write("-------------------------------"+"<br>");

var shop=[
    {
        name:"apple",
        color:"red",
        price:200,
        category:"fruit"
    },
    {
        name:"apple",
        color:"green",
        price:250,
        category:"fruit"
    },
    {
        name:"orange",
        color:"orange",
        price:100,
        category:"fruit"
    },
    {
        name:"banana",
        color:"yellow",
        price:120,
        category:"fruit"
    },
    {
        name:"banana",
        color:"red",
        price:180,
        category:"fruit"
    },
    {
        name:"banana",
        color:"green",
        price:90,
        category:"fruit"
    },
    {
        name:"pineapple",
        color:"yellow",
        price:60,
        category:"fruit"
    },
    {
        name:"grapes",
        color:"green",
        price:50,
        category:"fruit"
    },
    {
        name:"grapes",
        color:"purple",
        price:75,
        category:"fruit"
    },
    {
        name:"mango",
        color:"yellow",
        price:85,
        category:"fruit"
    },
    {
        name:"mango",
        color:"red",
        price:150,
        category:"fruit"
    },
    {
        name:"strawberry",
        color:"red",
        price:200,
        category:"fruit"
    },
    {
        name:"watermelon",
        color:"green",
        price:50,
        category:"fruit"
    }
];

let x=shop.filter(function(value,index,array){
    return value.color=="green";
});
let d=x.length;
document.write("No of green fruits :"+d+"<br>");
document.write("The green fruits are    :"+"<br>"+JSON.stringify(x)+"<br><br>");

let y=shop.filter(function(value,index,array){
    return value.price<=100;
});
let c=y.length;
document.write("No of below price of fruits :"+c+"<br>");
document.write("The below price of fruits  are :"+"<br>"+JSON.stringify(y)+"<br><br>");


let z=shop.filter(function(value,index,array){
    return value.name<="apple";
});
let e=z.length;
document.write("No of apple  :"+e+"<br>");
document.write("There  are :"+"<br>"+JSON.stringify(z));