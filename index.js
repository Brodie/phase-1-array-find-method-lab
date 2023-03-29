// code your solution here
const winDetector = (element) => {
    if (element.result === "W"){
        return element.year
    }
}

//Was having trouble since its returning an object and i need to access to first "key" to grab the year
// i check if array.find is giving a true or undefined/false value. 
// if true i set the value to a variable then access it with dot notation
// if false simply return undefined as requested
const superbowlWin = (array) =>{
    if(!!array.find(winDetector)){
    let winner = array.find(winDetector);
    return winner.year
} else {
    return array.find(winDetector)}

}
