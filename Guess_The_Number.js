const random_number = Math.floor(Math.random() * 99 + 1);
let number_of_guesses = 0;

while (number_of_guesses < 100) {
    let guessed_number = Number.parseInt(prompt("Enter your guess: "));
    ++number_of_guesses;

    if (isNaN(guessed_number)) {
        console.log("Enter a valid input!!!");
        break;
    }

    if (guessed_number === random_number) {
        console.log(`Congratulations! You guessed Correctly! in ${number_of_guesses} number of guesses. The random number was ${random_number}`);
        break;
    }
    else if (guessed_number > random_number) {
        console.log("Your guess is more than the actual number!");
    }
    else {
        console.log("Your guess is less than the actual number!");
    }
}

if (number_of_guesses === 100) {
    console.log("You have reached the limit of number of guesses (100)", `The actual number was ${random_number}`);
}