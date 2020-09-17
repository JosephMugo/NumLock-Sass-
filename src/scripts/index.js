console.log('---> index.js loaded <----')

// dot 1 
// dot 2 
// dot 3 
// dot 4

let userInput = [];

const getInput = (event) => {
    if (event.value === '-1') {
        // check if input is already empty
        if (userInput.length === 0) {
            // do nothing
        } else {
            // erase
            console.log('popping');
            userInput.pop();
            updateDots();
            console.log(userInput);
        }
    } else {
        // check if input is already up to four numbers
        if (userInput.length === 4) {
            // do nothing
        } else {
            console.log('pushing');
            userInput.push(event.value);
            updateDots();
            console.log(userInput);
            // when userInput becomes four numbers check passord
            if (userInput.length === 4) {
                checkPassword()
            }
        }
    }
}

const updateDots = () => {
    console.log(userInput.length);
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');
    let dot4 = document.getElementById('dot4');
    switch (userInput.length) {
        case 1:
            // add class
            dot1.classList.add('activeDot');
            // remove class
            dot2.classList.remove('activeDot');
            dot3.classList.remove('activeDot');
            dot4.classList.remove('activeDot');
            // add class
            dot2.classList.add('notActive');
            dot3.classList.add('notActive');
            dot4.classList.add('notActive');
            break;
        case 2:
            // add class
            dot1.classList.add('activeDot');
            dot2.classList.add('activeDot');
            // remove class
            dot3.classList.remove('activeDot');
            dot4.classList.remove('activeDot');
            //add class
            dot3.classList.add('notActive');
            dot4.classList.add('notActive');
            break;
        case 3:
            // add class
            dot1.classList.add('activeDot');
            dot2.classList.add('activeDot');
            dot3.classList.add('activeDot');
            // remove class
            dot4.classList.remove('activeDot');
            // add class
            dot4.classList.add('notActive');
            break;
        case 4:
            // add class
            dot1.classList.add('activeDot');
            dot2.classList.add('activeDot');
            dot3.classList.add('activeDot');
            dot4.classList.add('activeDot');
            break;
        default:
            // remove class
            dot1.classList.remove('activeDot');
            dot2.classList.remove('activeDot');
            dot3.classList.remove('activeDot');
            dot4.classList.remove('activeDot');
            // add class
            dot1.classList.add('notActive');
            dot2.classList.add('notActive');
            dot3.classList.add('notActive');
            dot4.classList.add('notActive');

            break;
    }
}

const checkPassword = () => {
    console.log('---> Running Function checkPassword() <---');
    // check if user inputed all four digits
    const password = userInput.join('');
    console.log(password);
    if (password === '1234') {
        console.log('Correct');
    } else {
        console.log('Wrong');
    }
}