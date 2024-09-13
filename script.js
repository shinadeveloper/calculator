function add(num1,num2){
    return num1+num2;
}
function product(num1,num2){
    return num1*num2;    
}
function division(x,y){
    if (y!=0){
        return (x/y);
    }
    else{
        display.innerHTML="Wrong Input"
    }
}
function subtract(num1,num2){
    return num1-num2;
}


const input = document.querySelectorAll(".buttons.num")
const clearall = document.querySelector("#ac")
const display = document.querySelector(".numbers")
const equals = document.querySelector("#equals")
const operators = document.querySelectorAll(".buttons.second")
const back=document.querySelector("#c")


input.forEach(every =>{
    every.addEventListener('click',(e)=>{
        display.innerHTML+=e.target.innerHTML;
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        display.innerHTML += e.target.innerHTML;
    });
});
equals.addEventListener("click",(e)=>{
    if (display.innerHTML.includes("+")){
        const splitArr = display.innerHTML.split("+");
        const a = parseInt(splitArr[0]);
        const b = parseInt(splitArr[1]);
        display.innerHTML=add(a,b);
    }
    if (display.innerHTML.includes("-")){
        const splitArr = display.innerHTML.split("-");
        const a = parseInt(splitArr[0]);
        const b = parseInt(splitArr[1]);
        display.innerHTML=subtract(a,b);
    }
    if (display.innerHTML.includes("÷")){
        const splitArr = display.innerHTML.split("÷");
        const a = parseInt(splitArr[0]);
        const b = parseInt(splitArr[1]);
        display.innerHTML=division(a,b);
    }
    if (display.innerHTML.includes("×")){
        const splitArr = display.innerHTML.split("×");
        const a = parseInt(splitArr[0]);
        const b = parseInt(splitArr[1]);
        display.innerHTML=product(a,b);
    }
});

clearall.addEventListener('click',()=>{
    display.innerHTML="";
})
back.addEventListener('click',()=>{
    const len=display.innerHTML.length
    display.innerHTML=display.innerHTML.slice(0,len-1)
})