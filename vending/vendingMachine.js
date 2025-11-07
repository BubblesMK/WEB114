//ask for a number of snacks
let snackCount = prompt("How many snacks do you want?");

if (snackCount === null) { // if the user clicks Cancel, the program should exit immediately
    console.log("No snacks requested. Exiting."); // when cancel is clicked, msg will be shown in console
}

//creating a For loop
//Loop from 1 to the number of snacks the user requested.
//Inside the loop, prompt the user to enter a name for each snack.

snackCount = Number(snackCount); // convert the input to a number

for (let i = 1; i <= snackCount; i++) { //1 starts the count
    let snack = prompt("Enter snack #" + i + " name."); //This prompt will appear for each snack you entered in the previous step.

    if (snack === null) { // if the user clicks Cancel, the program should exit immediately
        console.log("Snack selection cancelled. Exiting.");
        break; //stop the loop if Cancel is clicked
}
    //Print snack and Bonus message
    console.log("Snack #" + i + ": " + snack + " given to customer");
        if (i % 3 === 0 || i % 5 === 0) { // if the snack number is a multiple of 3 or 5
        console.log("You got a bonus snack!");
}
    let totalSnacks = i; // keep track of total snacks given
    if (i == snackCount) { // after the last snack
        console.log("Total snacks given: " + totalSnacks); // print total snacks given
    }
}


//optional challenge: Added a bonus snack after the 5th snack and Tracked the totalSnacks given.




