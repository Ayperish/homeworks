// function reverseStr(str){
//     return str.split("").reverse().join("")
// }
//
// console.log(reverseStr('hello'))


function calcNumbers(...num){
    for(var i = 0; i < num.length; i ++){
        return num[i] / num.length
    }
}

console.log(calcNumbers(23, 45, 67,212 ))


var arrData = ['name', 'John', 'lastname', 'Black', 'age', '23']
var objData = {}
for(var i = 0; i < arrData.length; i +=2){
    objData[arrData[i]] = arrData[i + 1]
}
console.log( objData)


var dataType = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo']
var typeNull =[]
var typeUndefined =[]
var typeNumbers =[]
var typeStrings =[]
   for (var i =0; i <dataType.length; i++){
       if (typeof dataType[i] === 'string'){
           typeStrings.push(dataType[i])
       }else if(typeof dataType[i] === 'object'){
           typeNull.push(dataType[i])
       }else if (typeof dataType[i] === "number"){
           typeNumbers.push(dataType[i])
       }else if (typeof dataType[i] === 'undefined'){
           typeUndefined.push(dataType[i])
       }
   }
console.log(typeStrings)
console.log(typeNull)
console.log(typeNumbers)
console.log(typeUndefined)












