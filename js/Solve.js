function solve(){
    console.log("X, Y")
    let X = parseInt(x.innerText);
    let Y = parseInt(y.innerText);
    console.log(X, Y);
    if(X>Y){
        let Z=X*Y;
        document.getElementById("result").innerText="Z = "+Z; 
    }
    else{
        let Z=Math.log(X+Y);
        document.getElementById("result").innerText="Z = "+Z;
    }
}
const x = document.getElementById("x");
const y = document.getElementById("y");

const ans = document.getElementById("answer");
ans.addEventListener('click',solve);