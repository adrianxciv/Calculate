//Input number selection if buttonValue = to 'C' display value returned else return variable plus value
function pushButton(buttonValue) {
    if (buttonValue == 'C') {
         document.getElementById('screen').value = '';
    }
    else {
         document.getElementById('screen').value += buttonValue;
    }
}
//Calculate equation and display answer
function calculate(equation) {
    let answer = eval(equation);
    document.getElementById('screen').value = answer;
}