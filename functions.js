//Question 1



//Question 2
var arr2 = [1, 0, 20, -2, 6, 5, -7]

function myFunction(arr2){
    let negative = arr2.filter ((element) => element < 0 )
    let positive = arr2.filter ((element) => element > 0)
    let zero = arr2.filter ((element) => element == 0)
    return{
        negative: negative,
        positive: positive,
        zero: zero
    }
}
console.log(myFunction(arr2))

//Question 3

//Question4
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number*2)
    });
}
multiply([3, 8, 4, 6])

//Qustion5
function changeArray(arr){
    const firstFour = arr.slice(0,4).map(item => item * 8)
    const lastTwo = arr.slice(-2).map(item => item +5)
    const newArr = firstFour.concatenate(lastTwo);
    console.log(newArr);
}
changeArray([9, 10, 11, 12, 14, 2, 1])





