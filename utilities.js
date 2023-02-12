function events(id){
    document.getElementById(id).addEventListener("click",function(){
    let value=document.getElementById(id).innerText;
    document.getElementById("input").value+=value;
    })
}
document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("input").value="";
})
document.getElementById("equal").addEventListener("click",function(){
    const firstValue=[];
    let first="";
    let second="";
    const inputValue= document.getElementById("input").value;
    const length=inputValue.length;
    let includePlus = inputValue.includes("+");
    let indexPlus=inputValue.indexOf("+");
    let indexMinus=inputValue.indexOf("-");
    let includeMinus = inputValue.includes("-");
    let includeDivision = inputValue.includes("/");
    let indexDivision=inputValue.indexOf("/");
    let includeMul = inputValue.includes("*");
    let indexMul=inputValue.indexOf("*");
    console.log(indexMinus);
    for(let i=0;i<length;i++){
        firstValue.push(inputValue[i]);
    }
    // for(i=0;i<length;i++){
    //     console.log(inputValue[i]);
    // }
    if(includePlus==true){
        for(i=0;i<indexPlus;i++){
            first=first+firstValue[i];
        }
        for(i=indexPlus+1;i<length;i++){
            second=second+firstValue[i];
        }
        first=parseFloat(first);
        second=parseFloat(second);
        let totalSum=first+second;
        console.log(totalSum);
        document.getElementById("input").value=totalSum;
    }
    if(includeMinus==true){
        for(i=0;i<indexMinus;i++){
            first=first+firstValue[i];
        }
        for(i=indexMinus+1;i<length;i++){
            second=second+firstValue[i];
        }
        first=parseFloat(first);
        second=parseFloat(second);
        console.log(first);
        console.log(second);
        let total=first-second;
        console.log(total);
        document.getElementById("input").value=total;
    }
    if(includeDivision==true){
        for(i=0;i<indexDivision;i++){
            first=first+firstValue[i];
        }
        for(i=indexDivision+1;i<length;i++){
            second=second+firstValue[i];
        }
        first=parseFloat(first);
        second=parseFloat(second);
        console.log(first);
        console.log(second);
        let total=first/second;
        console.log(total);
        document.getElementById("input").value=total;
    }
    if(includeMul==true){
        for(i=0;i<indexMul;i++){
            first=first+firstValue[i];
        }
        for(i=indexMul+1;i<length;i++){
            second=second+firstValue[i];
        }
        first=parseFloat(first);
        second=parseFloat(second);
        console.log(first);
        console.log(second);
        let total=first*second;
        console.log(total);
        document.getElementById("input").value=total;
    }
       

   

})