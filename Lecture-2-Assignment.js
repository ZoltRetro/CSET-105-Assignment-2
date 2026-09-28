const prompt = require('prompt-sync')();

// for(let count = 1; count <= 7; count++){
//     console.log('#'.repeat(count));
// }

// for(let count = 1; count <= 100; count++){
//     if(count % 3 === 0 && count % 5 === 0){
//         console.log('fizzbuzz');
//     }
//     else if(count % 5 === 0){
//         console.log('buzz');
//     }
//     else if(count % 3 === 0){
//         console.log('fizz');
//     }
//     else{
//         console.log(count);
//     }
// }
// width = Number(prompt('Enter the width of the square: '));
// height = Number(prompt('Enter the height of the square: '));
// for(let count = 1; count <= height/2; count++){
// line_1 = (' ' + '#').repeat(width/2);
// line_2 = ('#' + ' ').repeat(width/2);
// console.log(line_1);
// console.log(line_2);
// }

// for(let count = 1; count <= 50; count++){
//     console.log(count);
    
// }

// for(let count = 1; count <= 24; count++){
//     console.log(count)
// }

// for(let count = 1; count <= 24; count+=2){
//     console.log(count)
// }

// for(let count = 1; count <= 24; count++){
//     if(count % 3 === 0){
//         console.log(count);
//     }
// }

// for(let count = 0; count <= 50; count+=5){
//     console.log(count)
// }

// for(let count = 1; count <= 24; count++){
//     if(count % 2 === 0 && count % 3 === 0){
//         console.log();
//     }
//     else if(count % 2 === 0){
//         console.log(count);
//     }
//     else if(count % 3 === 0){
//         console.log(count);
//     }
// }

// for(let count = 0; count <= 100; count+=2){
//     if(count % 12 === 0){
//         console.log()
//     }
//     else if(count % 2 === 0 && count % 3 === 0){
//         console.log(count);
//     } 
// }
// // start of descending order loops
// for(let count = 50; count >= 1; count--){
//     console.log(count);
    
// }

// for(let count = 24; count >= 1; count--){
//     console.log(count)
// }

// for(let count = 24; count >= 1; count-=2){
//     console.log(count)
// }

// for(let count = 24; count >= 1; count--){
//     if(count % 3 === 0){
//         console.log(count);
//     }
// }

// for(let count = 50; count >= 0; count-=5){
//     console.log(count)
// }

// for(let count = 24; count >= 1; count--){
//     if(count % 2 === 0 && count % 3 === 0){
//         console.log();
//     }
//     else if(count % 2 === 0){
//         console.log(count);
//     }
//     else if(count % 3 === 0){
//         console.log(count);
//     }
// }

// for(let count = 100; count >= 0; count--){
//     if(count % 12 === 0){
//         console.log()
//     }
//     else if(count % 2 === 0 && count % 3 === 0){
//         console.log(count);
//     } 
// }

// for(let count = 1; count <= 10; count++){
//     console.log(`3 x ${count} = ${3 * count}`);
// }

// for(let count = 1; count <= 10; count++){
//     console.log(`17 x ${count} = ${17 * count}`);
// }


question = 0;

while(question !== 5){
    question = Number(prompt(`Press 1 to add, 2 to substract, 3 to multiply, 4 to divide, 5 to quit: `));

    if(question === 1){
        question_1 = Number(prompt(`Enter first number: `));
        question_2 = Number(prompt(`Enter second number: `));
        if(isNaN(question_1) || isNaN(question_2)){
            console.log('Warning Incorrect Number program ending!');
            break;
        }
        else{
            console.log(`The sum of the numbers is ${question_1 + question_2}`)
        }
    }
    else if(question === 2){
        question_1 = Number(prompt(`Enter first number: `));
        question_2 = Number(prompt(`Enter second number: `));
        if(isNaN(question_1) || isNaN(question_2)){
            console.log('Warning Incorrect Number program ending!');
            break;
        }
        else{
        console.log(`The difference of the numbers is ${question_1 - question_2}`)
        }
    }
    else if(question === 3){
        question_1 = Number(prompt(`Enter first number: `));
        question_2 = Number(prompt(`Enter second number: `));
        if(isNaN(question_1) || isNaN(question_2)){
            console.log('Warning Incorrect Number program ending!');
            break;
        }
        else{
            console.log(`The product of the numbers is ${question_1 * question_2}`)
        }
    }
    else if(question === 4){
        question_1 = Number(prompt(`Enter first number: `));
        question_2 = Number(prompt(`Enter second number: `));
        if(isNaN(question_1) || isNaN(question_2)){
            console.log('Warning Incorrect Number program ending!');
            break;
        }
        else{
            console.log(`The quotient of the numbers is ${question_1 / question_2}`)
        }
    }
    else{
        console.log(`Please select a valid option`);
        question = Number(prompt(`Press 1 to add, 2 to substract, 3 to multiply, 4 to divide, 5 to quit: `));

    }

}


