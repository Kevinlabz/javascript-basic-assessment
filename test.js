// #11 Write a function  called doubleTheFun that takes 1 parameter. It should double numbers, and
// repeats strings. example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'
function doubleTheFun(input) {
    console.log(typeof (input));

    if (typeof (input) === 'number') {
        return input + input;
    } else if (parseInt(input)) {
        var tempArr = input.split('');
        if (tempArr.length % 2 === 0) {
            var tempHalfIndex = tempArr.length / 2;
            console.log(tempHalfIndex);
            var half = tempArr.splice(0, tempHalfIndex);
            console.log(half);
            half = half.join('');
            console.log(half);
            half = parseFloat(half);
            console.log(half);
            return half + half;
        } else {
            return parseFloat(input) + parseFloat(input);
        }
    } else if (typeof (input) === 'string') {
        return input += input;
    }
}

var temp = doubleTheFun('1.5');
temp
//number