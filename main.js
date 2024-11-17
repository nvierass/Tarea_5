function getSum(numsArray) {
    const length = numsArray.length;
    let total = 0;
    for(number of numsArray){
        total = total + number;
    }
    return total;
}

function validGrades(grades){
    if(grades === undefined || grades === null){
        return false;
    }
    if(!Array.isArray(grades)){
        return false;
    }
    if(!isValidNumericArray(grades)){
        return false;
    }
    if(grades.length === 0){
        return false;
    }
    return true;
}

function isValidNumericArray(array){
    for (value of array){
        if (!(typeof value == "number")){
            return false;
        }   
        if (Number.isNaN(value)){
            return false;
        }
    }
    return true;
}

function getAverage(grades){
    if (!validGrades (grades)){
        return null;
    }
    let average = getSum(grades) / grades.length;
    return average;
}

const grades = [6,8,9,2,5,10];
const average = getAverage(grades);

if(average){
    console.log("El promedio es: ", average)
}
else{
    console.log("Las notas no son válidas para la operación.")
}