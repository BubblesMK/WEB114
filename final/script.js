//Mandisa Harris-King 12/02/2025//
//Random Coffee Fact Generator//

//prompt user with a question
const userName = prompt("What is your name?");
const heading = document.querySelector("h1"); //the content in the h1 element will be updated with the next text in the if...else statement

if (userName && isNaN(userName)) { //allows for the name to be entered with or without a capital letter
    //users name will be added to the statement if they answered the prompt
    heading.textContent = ("Hi " + userName + "!" + " Do you want to learn a new fact about coffee?");
} else {
    //if user canceled the prompt, their name will NOT be included in the statement
    heading.textContent = ("Hi there! Do you want to learn a new fact about coffee?");
}

const generateFact = document.getElementById("generateFact"); //gets the button element
const facts = document.getElementById("coffee"); //gets the paragraph element

//all of the coffee facts held in one variable
const coffeeFacts = {
    fact1: "There have been five attempts to ban coffee in the world (that we know of).",
    fact2: "The most expensive coffee ever purchased at auction was $4,535 per pound.",
    fact3: "The world consumes about 2.25 billion cups of coffee each day",
    fact4: "More than 100 million people make a living from coffee worldwide.",
    fact5: "Coffee drinkers tend to live longer",
    fact6: "Coffee beans are technically seeds",
    fact7: "Drinking Coffee in public was once punishable by death",
    fact8: "Starbucks opens an average of two stores per day",
    fact9: "There are only 4 types of coffee beans you need to know about: Arabica, Robusta, Liberica, and Excelsa.",
    fact10: "Espresso is a brewing method that uses pressure to force hot water through finely ground coffee.",
    fact11: "A standard 240 ml cup of brewed coffee often contains roughly 80–140 mg of caffeine.",
    fact12: "Coffee aroma is extremely complex, involving hundreds of identifiable volatile compounds."
}

//custom function to generate a random coffee fact
function displayRandomFact() {
    let randomFact = Math.floor(Math.random() * 12) + 1; 
    //displays a random coffee fact based on the random number generated
    switch(randomFact) {
        case 1:
            facts.textContent = coffeeFacts.fact1;
            break;
        case 2:
            facts.textContent = coffeeFacts.fact2;
            break;
        case 3:
            facts.textContent = coffeeFacts.fact3;
            break;
        case 4:
            facts.textContent = coffeeFacts.fact4;
            break;
        case 5:
            facts.textContent = coffeeFacts.fact5;
            break;
        case 6:
            facts.textContent = coffeeFacts.fact6;
            break;
        case 7:
            facts.textContent = coffeeFacts.fact7;
            break;
        case 8:
            facts.textContent = coffeeFacts.fact8;
            break;
        case 9:
            facts.textContent = coffeeFacts.fact9;
            break;
        case 10:
            facts.textContent = coffeeFacts.fact10;
            break;
        case 11:
            facts.textContent = coffeeFacts.fact11;
            break;
        case 12:
            facts.textContent = coffeeFacts.fact12;
            break;
    }                   
};

generateFact.addEventListener("click", displayRandomFact); //event listener for button click

//coffee facts references --- https://funfacts.co/fun-facts-about-coffee/ & https://coffeeparadiso.com/coffee-facts/
//https://clivecoffee.com/blogs/learn/the-5-best-fun-facts-about-coffee-history?utm_term=clivecoffee.com&utm_campaign=US+%7C+S+Shopping+%7C+Best+Sellers+%5BNew%5D&utm_source=bing&utm_medium=ppc&hsa_tgt=kwd-2334881661946777:loc-190&hsa_grp=1329312057395007&hsa_src=o&hsa_net=adwords&hsa_mt=b&hsa_ver=3&hsa_ad=&hsa_acc=5425615321&hsa_kw=clivecoffee.com&hsa_cam=18137826127&msclkid=6829b744b98e1f90ef6ade6bdf0d2696
