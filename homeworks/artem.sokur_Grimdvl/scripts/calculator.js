window.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const signs = document.querySelectorAll('.sign');
    const buttons = document.querySelectorAll('.button');
    const resultOutput = document.querySelector('.output-result');
    const resultInput = document.querySelector('.input-result');
    const equel = document.querySelectorAll('.output-equal');

    const stateInputs = {};

    const checkNumInputs = (selector) => {
        const numInputs = document.querySelectorAll(selector);
        numInputs.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9.]/g, '');
            });
        });
    };

    let result;
    const calculate = (firstNum, operator, secondNum) => {
        switch (operator) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                if (secondNum === 0) {
                    return 'Choose another second number';
                }
                result = firstNum / secondNum;
                break;
            case '%':
                result = firstNum % secondNum;
                break;
            case '**':
                result = firstNum ** secondNum;
                break;
            default:
                result = 'Invalid operator';
        }
        if (result > 100) {
            result = 'Too many';
        } else {
            result = Math.round(result * 100) / 100;
        }
        equel.forEach((item) => {
            item.textContent = '=';
        });
        if (operator === 'sign') {
            result = 'Invalid operator';
            equel.forEach((item) => {
                item.textContent = '';
            });
        } else {
            result = `${result} pokemons`;
        }
        return result;
    };

    const changeState = (state) => {
        const calculator = (event, elem, prop) => {
            checkNumInputs('#first-number');
            checkNumInputs('#second-number');

            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    const inputNumber = numbers[i];
                    const inputSign = signs[i];
                    const buttonOutput = buttons[i];
                    switch (item.nodeName) {
                        case 'INPUT':
                            if (inputNumber) {
                                if (i === 0) {
                                    state[prop] = item.value;
                                    const num1 = +inputNumber.value;
                                    numbers[2].textContent = num1;
                                    // drawPokemons(num1, '.calculator .output__first');
                                    if (numbers[0].value.trim() === '') {
                                        numbers[2].textContent = '';
                                        resultOutput.textContent = 'Please enter the first numbers';
                                        const errorMessage = resultOutput.textContent;
                                        return errorMessage;
                                    }
                                    if (numbers[1].value.trim() === '') {
                                        numbers[3].textContent = '';
                                        resultOutput.textContent = 'Please enter the second numbers';
                                        const errorMessage = resultOutput.textContent;
                                        return errorMessage;
                                    }
                                    result = calculate(
                                        +num1,
                                        signs[0].value,
                                        +numbers[1].value,
                                    );
                                    resultOutput.textContent = result;
                                } else if (i === 1) {
                                    state[prop] = item.value;
                                    const num2 = +inputNumber.value;
                                    numbers[3].textContent = num2;
                                    if (numbers[0].value.trim() === '') {
                                        numbers[2].textContent = '';
                                        resultOutput.textContent = 'Please enter the first numbers';
                                        const errorMessage = resultOutput.textContent;
                                        return errorMessage;
                                    }
                                    if (numbers[1].value.trim() === '') {
                                        numbers[3].textContent = '';
                                        resultOutput.textContent = 'Please enter the second numbers';
                                        const errorMessage = resultOutput.textContent;
                                        return errorMessage;
                                    }
                                    result = calculate(
                                        +numbers[0].value,
                                        signs[0].value,
                                        +num2,
                                    );
                                    resultOutput.textContent = result;
                                }
                            }
                            break;
                        case 'SELECT':
                            if (inputSign) {
                                if (i === 0) {
                                    state[prop] = item.value;
                                    const sign = inputSign.value;
                                    signs[1].textContent = sign;
                                    if (numbers[0].value.trim() === '') {
                                        numbers[2].textContent = '';
                                        resultOutput.textContent = 'Please enter the first numbers';
                                        const errorMessage = resultOutput.textContent;
                                        return errorMessage;
                                    }
                                    if (numbers[1].value.trim() === '') {
                                        numbers[3].textContent = '';
                                        resultOutput.textContent = 'Please enter the second numbers';
                                        const errorMessage = resultOutput.textContent;
                                        return errorMessage;
                                    }
                                    result = calculate(
                                        +numbers[0].value,
                                        sign,
                                        +numbers[1].value,
                                    );
                                    resultOutput.textContent = result;
                                }
                            }
                            break;
                        case 'BUTTON':
                            if (buttonOutput) {
                                if (i === 0) {
                                    if (numbers[0].value.trim() === '') {
                                        resultInput.textContent = 'Please enter the first numbers';
                                        const errorMessage = resultInput.textContent;
                                        return errorMessage;
                                    }
                                    if (numbers[1].value.trim() === '') {
                                        resultInput.textContent = 'Please enter the first numbers';
                                        const errorMessage = resultInput.textContent;
                                        return errorMessage;
                                    }
                                    state[prop] = item.textContent;
                                    result = calculate(
                                        +numbers[0].value,
                                        signs[0].value,
                                        +numbers[1].value,
                                    );
                                    resultInput.textContent = result;
                                }
                            }
                            break;
                        default:
                            console.log('Error');
                    }
                    console.log(state);
                    return result;
                });
            });
        };
        calculator('input', numbers, 'number');
        calculator('change', signs, 'sign');
        calculator('click', buttons, 'button');
    };
    changeState(stateInputs);
});
