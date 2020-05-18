// ; is not necessary
const defaultResult = 0;
// Global variable
let currentResult = defaultResult;
// Array
let logEntries = [];
// currentResult = (currentResult + 10) * 3 / 2 - 1;
// ** Function

function getUserNumberInput() {
    return parseFloat(userInput.value);
}

function createAndWriteOutPut(operation, resultBeforeCalc, calcNumber) {
    const calDiscription = `${resultBeforeCalc} ${operation} ${calcNumber}`;
    outputResult(currentResult, calDiscription) // from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    // ** Objects
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry)
    // Accessing Object Data
    console.log(logEntry.operation)

    console.log(logEntries)
}

function add() {
    // Local variable
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // const calDiscription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
    // currentResult = currentResult + +userInput.value;
    // alert('The result is ' + result);
    // return result;
    // outputResult(currentResult, calDiscription)
    createAndWriteOutPut('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutPut('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutPut('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutPut('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// ** also can call function before creation of the function
//currentResult = add(4, 5);
// ** string concatination
// let calculationDiscription = '(' + defaultResult + '+ 10) * 3 / 2 - 1'
// ** Template literal - can write multiline string, back ticks ` `
// ** backticks ``
let calculationDiscription = `(${defaultResult} +
    10) * 3 / 2 - 1`;
let errorMessage = 'An error \n' +
    'occurred!';
