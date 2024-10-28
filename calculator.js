let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const action = ["-", "+", "×", "÷", "%", "+/-"];

const out = document.getElementsByClassName("input")[0];

function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}

document.getElementById("ac").onclick = clearAll;

document.getElementsByClassName("buttons")[0].onclick = (event) => {
    if (!event.target.tagName === 'BUTTON') return;

    if (event.target.id === "ac") return;

    const key = event.target.textContent;

    if (digit.includes(key)){
        if(b === "" && sign === ""){
        a += key;
        out.textContent = a;    
        }
        else if(a!== "" && b!== "" && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        return;
    }
    if (key === "="){
        if(b ===""){
            b = a;
        }
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "×":
                a = a * b;
                break;
            case "÷":
                if (b === "0"){
                    out.textContent = "ERROR";
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
    if (key === "%"){
        a = (+a) / 100;
        out.textContent = a;
    }
};