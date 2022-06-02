function guessGame(low, high) {
    var userName = prompt("Enter your username: ");
    console.log(`Hello ${userName}! \nWelcome to the guessing game\nINSTRUCTIONS: You are to guess the randomly generated number between the range 1 and 2. If your guess is correct, you move to the next stage and the range is increased by 1 otherwise it'sGAME OVER!!!!!!`);
    var low = 1,
        high = 2,
        point = 0,
        post = true,
        stage = 1;
    while (post) {
        var random = Math.floor(Math.random() * high + low);
        var guess = Number(prompt("Guess the number: "));
        if (guess == random) {
            point++;
            high++;
            stage++;
            console.log(`You got it right!! \nYou've moved to stage ${stage} `);
            post = true;
        } else if (guess != random) {
            console.log(`Game over, you finished with ${point} point`);
            var decision = Number(prompt(("Would you like to continue playing?\nEnter '1' to continue and '2' to end.")));
            if (decision == 1) {
                post = true;
            } else if (decision == 2) {
                post = false;
            }

        }
    }
}

guessGame(1, 2);