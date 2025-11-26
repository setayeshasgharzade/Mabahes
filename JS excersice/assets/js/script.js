let seasonNumber = 2;

switch (seasonNumber) {
  case 1: 
    console.log("spring"); break;
  case 2: 
    console.log("summer"); break;
  case 3: 
    console.log("fall"); break;
  case 4: 
    console.log("winter"); break;
  default: 
    console.log("neither");
}


let totalPrice = 150000; 
let postCost;

if (totalPrice < 100000) {
    postCost = 20000;
} 
else if (totalPrice >= 100000 && totalPrice <= 200000)
     {
    postCost = 10000;
} 
else
     {
    postCost = 0;
}

console.log("the post cost is: ",postCost);