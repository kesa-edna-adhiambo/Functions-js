//Question 1
//ascending
let elements =[
    {
    "name": "kate",
    },

    {
      "name": "Faith",
    },

    {
      "name":"Brenda",
    },

    {
        "name":"Edna"
    },

]
console.log("original elements are:")
console.log(elements)
let sortedElements = elements.sort(
    (n1 , n2) => (n1.name < n2.name) ? -1 : (n1.name > n2.name)? 1 : 0)

console.log("names sorted in ascending order")
console.log(sortedElements)

//descending
let ele =[
    {
    "name": "kate",
    },

    {
      "name": "Faith",
    },

    {
      "name":"Brenda",
    },

    {
        "name":"Edna"
    },

]
console.log("original ele are:")
console.log(ele)
let sortedEle = ele.sort(
    (n1 , n2) => (n1.name < n2.name) ? 1 : (n1.name > n2.name)? -1 : 0)

console.log("names sorted in descending order")
console.log(sortedEle)



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
//ascending order
let object = [
    {
        "id": 40486,
        "name": "Brenda",
        "salary":4000
    },

    {
        "id": 32323,
        "name":"Faith",
        "salary":3000
    },

    {
        "id": 20224,
        "name": "Levin",
        "salary": 5000
    },

]


console.log("Original object are:")
console.log(object)
let sortedSalary = object.sort(
     (s1, s2) => (s1.salary < s2.salary) ? -1 : (s1.salary > s2.salary) ? 1:0);

     console.log("object sorted based on ascending order of their salary")
     console.log(sortedSalary)
   


//Question4
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number*2)
    });
}
multiply([3, 8, 4, 6])

//Qustion5

function array(arr){
    let firstFour = arr.slice(0, 5).map(item => item * 8)
    let lastTwo = arr.slice(-3).map(item => item + 5)
    let newArr = (firstFour) +  (lastTwo)
    console.log(newArr)

}

array([9, 8, 7, 6, 5, 4, 3, 2])






  
  











