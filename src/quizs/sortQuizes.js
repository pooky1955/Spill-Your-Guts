function sortQuizs(quiz,label){
    let arr = quiz
    let names = arr.map((value)=>{return value.name})
    names.sort()
    let finalArray =[]
    for (let i = 0; i < names.length ; i++){
        let oldIndex = names.indexOf(arr[i].name)
        finalArray[oldIndex] = arr[i]
    }
    for (let i = 0; i < finalArray.length; i++){
        finalArray[i].family = label
    }
    return finalArray
}
export default sortQuizs