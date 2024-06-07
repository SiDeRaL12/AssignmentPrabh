// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO

function yOrn (word){
    if (word.includes("y")){
        console.log("Yes")
    }
    else{
        console.log("NO")
    }
}

// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach// function getFactorial(num) {
// logic
// return the value;
// }

let accumulate = 1


function factorial(num){
    for(let i=1; i<=num; i++){
        accumulate = accumulate * i
    }
    return accumulate
}

console.log(factorial(5))



//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];

// function getHighestAverageStudent() { // return string
    // returns the student name with highest average marks
// }

let studentList = [
       { name: "Mike", marks: [80, 50, 60, 100] },
       { name: "Daniel", marks: [40, 80, 100, 100] }, 
       {
         name: "Stacy",
         marks: [20, 100, 50, 70],
       },
     ];
 
function getHighestAverageStudent(studentList){
    function average(marks){
        let sum= marks.reduce((total,mark) => total + mark,0)
        return sum / marks.lenght()
    }
    
    let averageGrades = studentList.map(function(student){
        return {
            name: student.name,
            averageGrade: average(student.marks)
        }
    })

    let highestAverage = averageGrades.reduce(function(highest, current) {
        current.averageGrade > highest.averageGrade ? current : highest
    });

    return highestAverage
}

    


//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


function findMostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentNum;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (frequency[num] !== undefined) {
            frequency[num] += 1; 
        } else {
            frequency[num] = 1; 
        }
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequentNum = num;
        }
    }   

    return mostFrequentNum;
}

let arr = [20, 4, -10, 4, 11, 20, 4, 2];
console.log(findMostFrequent(arr)); 



//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]
// aba abba  abca  acca a 

function findUnique(arr){

    let frequency = {}

    for(let i = 0; i< arr.length; i++){
        let num = arr[i];
        if (frequency[num] !== undefined) {
            frequency[num] = false; 
        } else {
            frequency[num] =true; 
        }
    }
    
    for(let num in frequency){
        if(frequency[num]){
            return num
        }
    }

    return frequencyCounter

}


//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']