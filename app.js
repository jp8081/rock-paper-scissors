function computerPlay() {
    let computerThrow
    let computerThrowNum = Math.floor(Math.random() * 3 + 1);

    if (computerThrowNum === 1) {
        computerThrow = 'Rock';

    }
    else if (computerThrowNum === 2) {
        computerThrow = 'Paper';
    }
    else if (computerThrowNum === 3) {
        computerThrow = 'Scissors';
    }

    console.log(computerThrow);
    return computerThrow;
}