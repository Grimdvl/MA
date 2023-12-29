const firstInputNumber = document.querySelectorAll('.number__first--input');
const firstOutputNumber = document.querySelector('.number__first--output');
const secondInputNumber = document.querySelectorAll('.number__second--input');
const secondOutputNumber = document.querySelector('.number__second--output');
const signSelect = document.querySelectorAll('.math__sign--select');
const signOutput = document.querySelector('.math__sign--output');
const outputs = document.querySelectorAll('.calculator__outputs-numbers div');
const equelButton = document.querySelectorAll('.equel--button');
const resultInput = document.querySelector('.result--input');
const resultOutput = document.querySelector('.output-result');
const equel = document.querySelectorAll('.output-equal');

const stateInputs = {};

// transform value to numbers
const checkNumInputs = (selector) => {
    selector.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9.]/g, '');
        });
    });
};

// class PokemonsCards {
//     constructor(src, alt, parentSelector, ...classes) {
//         this.src = src;
//         this.alt = alt;
//         this.classes = classes;
//         this.parent = document.querySelector(parentSelector);
//     }

//     render() {
//         const element = document.createElement('div');
//         if (this.classes.length === 0) {
//             this.classes = 'output-card';
//             element.classList.add(this.classes);
//         } else {
//             this.classes.forEach((className) => element.classList.add(className));
//         }
//         element.innerHTML = `<img src=${this.src} alt=${this.alt}>`;
//         this.parent.append(element);
//     }
// }

// const drawPokemons = (inputValue, containerSelector) => {
//     const cardContainer = document.querySelector(containerSelector);
//     cardContainer.innerHTML = '';
//     const numberOfPokemons = parseInt(inputValue, 10);
//     const isNegative = numberOfPokemons < 0;
//     for (let i = 0; i < Math.abs(numberOfPokemons); i++) {
//         new PokemonsCards(
//             'img/pokemon.png',
//             'pokemon',
//             containerSelector,
//         ).render();
//     }
//     if (inputValue > 100) {
//         resultOutputCards.textContent = 'To many pokemons';
//     }
//     return isNegative ? -numberOfPokemons : numberOfPokemons;
// };

let result;
const calculate = (firstNum, operator, secondNum) => {
    if (!firstNum || !secondNum) {
        outputs.forEach((item) => {
            item.textContent = '';
        });
        result = 'Enter all numbers';
    } else if (!operator) {
        outputs.forEach((item) => {
            item.textContent = '';
        });
        result = 'Invalid operator';
    } else {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);
        firstOutputNumber.textContent = num1;
        secondOutputNumber.textContent = num2;
        signOutput.textContent = operator;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (secondNum === 0) {
                    return 'Сant divide by zero';
                }
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            case '**':
                result = num1 ** num2;
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
        if (result <= 1 && result >= -1) {
            result = `${result} pokemon`;
        } else {
            result = `${result} pokemons`;
        }
    }
    resultOutput.textContent = result;
    return result;
};

// Calculator
const changeState = (state) => {
    const calculator = (event, elem, prop) => {
        checkNumInputs(firstInputNumber);
        checkNumInputs(secondInputNumber);

        elem.forEach((item) => {
            item.addEventListener(event, () => {
                const items = item.value;
                switch (item.nodeName) {
                    case 'INPUT':
                        if (item.classList.contains('number__first--input')) {
                            state[prop] = items;
                            // drawPokemons(num1, '.calculator .output__first');
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                            // drawPokemons(result, '.calculator .output__result');
                        } else if (item.classList.contains('number__second--input')) {
                            state[prop] = items;
                            // drawPokemons(num2, '.calculator .output__second');
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                            // drawPokemons(result, '.calculator .output__result');
                        }
                        break;
                    case 'SELECT':
                        if (item.classList.contains('math__sign--select')) {
                            state[prop] = items;
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                            // drawPokemons(result, '.calculator .output__result');
                        }
                        break;
                    case 'BUTTON':
                        if (item.classList.contains('equel--button')) {
                            state[prop] = result;
                            calculate(state.firstNumber, state.sign, state.secondNumber);
                            resultInput.textContent = result;
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
    calculator('input', firstInputNumber, 'firstNumber');
    calculator('input', secondInputNumber, 'secondNumber');
    calculator('change', signSelect, 'sign');
    calculator('click', equelButton, 'result');
};
changeState(stateInputs);
