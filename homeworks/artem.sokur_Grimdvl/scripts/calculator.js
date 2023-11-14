// window.addEventListener('DOMContentLoaded', () => {
//     const firstNumber = document.querySelectorAll('#first-number');
//     const secondNumber = document.querySelectorAll('#second-number');

//     const stateInputs = {
//         firstNum: '',
//         sign: '',
//         secondNum: '',
//         result: '',
//     };

//     const checkNumInputs = (selector) => {
//         const numInputs = document.querySelectorAll(selector);
//         numInputs.forEach((item) => {
//             item.addEventListener('input', () => {
//                 item.value = item.value.replace(/[^0-9.]/g, '');
//             });
//         });
//     };

//     const changeState = (state) => {
//         const calculator = (event, elem, prop) => {
//             checkNumInputs('#first-number');
//             checkNumInputs('#second-number');

//             elem.forEach((item, i) => {
//                 item.addEventListener(event, () => {
//                     switch (item.nodeName) {
//                         case 'INPUT':
//                             state[prop] = item.value;
//                             break;
//                         case 'SELECT':
//                             state[prop] = item.value;
//                             break;
//                         case 'BUTTON':
//                             state[prop] = item.textContent;
//                             break;
//                         default:
//                             console.log('Error');
//                             break;
//                     }
//                     console.log(state);
//                     return result;
//                 });
//             });
//         };
//         calculator('input', firstNumber, 'firstNum');
//         calculator('change', signs, 'sign');
//         calculator('input', secondNumber, 'secondNum');
//         calculator('click', buttons, 'button');
//     };
//     changeState(stateInputs);
// });
