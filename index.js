function convertFahrToCelcius(fahr){
    if(typeof fahr === "number"){
        let celcius = (fahr-32) * (5/9);
        return celcius.toFixed(4);
    }else if(typeof fahr === "object"){
        if(Array.isArray(fahr)){
            return `[${fahr}] is not a valid number but a/an Array`;
        }else{
            return `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}`;
        }
    }else if(typeof fahr === "string"){
        let fahrNumber = Number(fahr);
        if(isNaN(fahrNumber)){
            return `${fahr} is not a valid number but a/an ${typeof fahr}`
        }else {
            let celcius = (fahrNumber-32) * (5/9);
        return celcius.toFixed(4);
        }
    }
}
console.log(convertFahrToCelcius(0));
console.log(convertFahrToCelcius([1,2,3]));
console.log(convertFahrToCelcius({"temp":0}));
console.log(convertFahrToCelcius("a"));

function checkYuGiOh(n){
    if(n === ""){
        return `invalid parameter: \"${n}\"`;
    }
    if(typeof n === "number"){
        return convertN(n);
    }else if(typeof n === "object"){
        return `invalid parameter: \"${JSON.stringify(n)}\"`;
    }else if(typeof n === "string"){
        newN = Number(n);
        if(isNaN(newN)){
            return `invalid parameter: \"${n}\"`;
        }else {
            return convertN(newN);
        }
    }
}

function convertN(n){
    let nArrays = [];
    if(n<1){
        console.log(nArrays);
        return nArrays;
    }
    let i = 1;
    while(i<=n){
        if (i%2==0 && i%3==0 && i%5==0) {
            nArrays.push("yu-gi-oh");
        } else if (i%2==0 && i%3==0) {
            nArrays.push("yu-gi");
        }else if (i%2==0 && i%5==0) {
            nArrays.push("yu-oh");
        }else if (i%3==0 && i%5==0) {
            nArrays.push("gi-oh");
        }else if (i%2==0) {
            nArrays.push("yu");
        }else if (i%3==0) {
            nArrays.push("gi");
        }else if (i%5==0) {
            nArrays.push("oh");
        }else{
            nArrays.push(i);
        }

        i++;
    }
    console.log(nArrays);
    return nArrays;
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh({"temp":0}));
console.log(checkYuGiOh("o"));
console.log(checkYuGiOh(""));

