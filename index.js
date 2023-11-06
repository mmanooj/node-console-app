const readline = require('readline');
const Stack = require('./Stack');
const Queue = require('./Queue');

const consoleInterface = readline.createInterface({input: process.stdin, output: process.stdout});
let _DS;

function processAnswer(answer) {
    const answerSplits = answer.split(" ");
    let command = answerSplits[0];
    let input = answerSplits[1];
    try {
        switch (command) {
            case "new-stack":
            case "new-queue":
                if (_DS) {
                    printDS();
                    _DS.clear();
                }
                _DS = command === "new-stack" ? Stack() : Queue();
                console.log(`${command} created`);
                break;
            case "push":
                validateDS();
                _DS.push(input);
                console.log(`${input} pushed into DS`);
                break;
            case "pop":
                validateDS();
                const value = _DS.pop()
                console.log(`${value} popped from DS`);
                break;
            case "print":
                validateDS();
                printDS();
                break;
            case "flush":
                validateDS();
                printDS();
                _DS.clear();
                break;
            case "exit": {
                consoleInterface.close();
                break;
            }
            default : {
                throw new Error("Unknown command");
            }
        }
    } catch (err) {
        console.log(`Error - ${err.message}`);
    }
    if (command !== "exit") {
        prompt();
    }
}

function prompt() {
    consoleInterface.question("What do you want to do?", processAnswer);
}

function validateDS() {
    if (!_DS)
        throw new Error('DS not initialized');
}

function printDS() {
    if (_DS) {
        let iterable = _DS.getAll()
        for (let each of iterable) {
            console.log(each);
        }
    }
}

prompt();
