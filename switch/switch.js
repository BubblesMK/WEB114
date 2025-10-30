//Mandisa Harris 10-30-2025

// Question 1 - When would you use a switch statement in your projects?
// Answer to Question 1 - I would use a switch statement in your project when you are looking for a specific input and/or you are receiving a variety of variable. By utilizing 
                    // the switch statement it makes the code more readable and clear.

const favMonth = prompt("What is your favorite month?"); 

//if...else statements
if (!isNaN(favMonth)) { //checks to make sure the input is NOT a number
    console.log("Please enter a valid month, not a number!") // Printed correctly when 25 entered
}
else if (favMonth.toLowerCase() === "december" || favMonth.toLowerCase() === "january" || favMonth.toLowerCase() === "february") {
    console.log("You love the winter months!");
}
else if (favMonth.toLowerCase() === "june" || favMonth.toLowerCase() === "july" || favMonth.toLowerCase() === "august") {
    console.log("You love the summer months!");
}
else {
    console.log("Other months are interesting too!");
}

//switch statements
switch (favMonth.toLowerCase()) {   //by using toLowerCase--coverts upper case input to lowercase
    //cases go below
    case "january":
        console.log("Wow, you like it cold!"); //Printed correctly 
        break;

    case "february":
        console.log("The month of love!"); //Printed correctly 
        break;
    
    case "march":
        console.log("Finally, winter is practically over!"); //Printed correctly 
        break;
    
    case "april":
        console.log("Time for spring cleaning!"); //Printed correctly 
        break;

    case "may":
        console.log("April showers brings May flowers!"); //Printed correctly 
        break;

    case "june":
        console.log("It's pool time!"); //Printed correctly 
        break;

    case "july":
        console.log("Oh, so you like the scorching heat?!?!"); //Printed correctly 
        break;

    case "august":
        console.log("Let's go to the beach!"); //Printed correctly 
        break;
    
    case "september":
        console.log("Back to school we go!"); //Printed correctly 
        break;
    
    case "october":
        console.log("Time to watch the leaves turn pretty colors!"); //Printed correctly 
        break;
    
    case "november":
        console.log("Cozy weather is finally here!"); //Printed correctly 
        break;
    
    case "december":
        console.log("You must love snow too!"); //Printed correctly 
        break;
}

