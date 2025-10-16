// Mandisa Harris-King Date: 10/16/2025

//define variables for budget

let money = 2000;
let housing = 1000;
let food = 500;
let monthlyUtilities = 225;

let totalIncome = money;
let totalExpenses = (housing + food + monthlyUtilities);
let remainingMoney = (totalExpenses - money);

let percentageRent = (housing / totalIncome) * 100;
let percentageGroceries = (food / totalIncome) * 100;

//budget message output

// money is being formatted as currency which allows the money to be displayed as USD currency
console.log( "The total income was: " + totalIncome.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log( "The rent amount was: " + housing.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( "The grocery total was: " +  food.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( "The percent spent on rent is: " + percentageRent + "%");
console.log( "The percent spent on groceries is: " + percentageGroceries + "%");

