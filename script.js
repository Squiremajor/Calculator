let firstNum = '';
let secondNum = '';
let opType = '';
const operate = (a, b, op) => {
    let result;
    x = parseFloat(a);
    y = parseFloat(b);
    switch (op) {
        case '/':
            if (y == 0) {
                result = 'Yeah, no.'
            } else {
               result = x/y;
               secondNum = secondNum.replace(secondNum, '');
               firstNum = firstNum.replace(firstNum, result.toString())
            }
            break;
        case 'X':
            result = x*y;
            secondNum = secondNum.replace(secondNum, '');
            firstNum = firstNum.replace(firstNum, result.toString())
            break;
        case '+':
            result = x+y;
            secondNum = secondNum.replace(secondNum, '');
            firstNum = firstNum.replace(firstNum, result.toString())
            break;
        case '-':
            result = x-y;
            secondNum = secondNum.replace(secondNum, '');
            firstNum = firstNum.replace(firstNum, result.toString())
            break;
        default:
            result = "Try again";
    }
    return Math.round(result * 1000) / 1000;
}

document.querySelectorAll('#number').forEach(item => {
    item.addEventListener("click", () => {
        if (opType == ''){
            firstNum += item.innerHTML;
            console.log(firstNum);
            answer.innerHTML = firstNum;
            return firstNum; 
            
        } else {
            secondNum += item.innerHTML;
            console.log(secondNum);
            answer.innerHTML = secondNum;
            return secondNum;
        }
    })
});

document.querySelectorAll('#operator').forEach(item => {
    item.addEventListener('click', () => {
        if (opType = '') {
            opType += item.innerHTML;
            console.log(opType);
            return opType; 
        } else {
            opType = opType.replace(opType, item.innerHTML);
            return opType;
        }

    })
})


const answer = document.querySelector('.window');
const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    answer.innerHTML = operate(firstNum, secondNum, opType);
})

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    firstNum = firstNum.replace(firstNum, '');
    secondNum = secondNum.replace(secondNum, '');
    opType = opType.replace(opType, '');
    answer.innerHTML = 0;
})

const del = document.getElementById('delete');
del.addEventListener('click', () => {
    if (firstNum != '' && opType == '') {
        firstNum.removeCharAt(firstNum.length -1);
    } else if (firstNum != '' && opType != '' && secondNum == '') {
        opType.removeCharAt(opType.length -1);
    } else if (secondNum != '') {
        secondNum.removeCharAt(secondNum.length -1);
    }
})