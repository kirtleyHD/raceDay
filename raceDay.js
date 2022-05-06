// Step 1.
// Race numbers are assigned randomly. Here's one way to do it:

let raceNumber = Math.floor(Math.random() * 1000);

// Step 2.
// Create a variable that indicates whether a runner registered early or not.

// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.

var earlyReg = false;

// Step 3.
// Create a variable for the runner’s age and set it equal to a number.

var runnerAge = 17;

// You’ll change this later as you test different runner conditions.

// Step 4.
// Create a control flow statement that checks whether the runner is an adult AND registered early.

if (runnerAge >= 18) {
    raceNumber += 1000
};

// Add 1000 to their raceNumber if this is true.

// Step 5.
// Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.

// For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.

if (raceNumber > 1000 && earlyReg) {
    console.log(`Racer #${raceNumber} will race at 9:30am`)
}

// Step 6.
// “Late adults run at 11:00 am”

// Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am

// Write the corresponding else if statement.
// Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.

else if (raceNumber > 1000 && !earlyReg) {
    console.log(`Racer #${raceNumber} will race at 11:00am`);
}


// Step 7.
// “Youth registrants run at 12:30 pm (regardless of registration)”

// For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.

else if (raceNumber < 1000) {
    console.log(`Racer #${raceNumber} will race at 12:30pm`);
};

// Step 8.
// Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!

// Step 9.
// Run your program a few times to see random results appear in the console!