// let a = document.querySelector(".container input");
// let btn = document.querySelector(".btn");
// let body = document.querySelector("body");
// let dd = document.querySelectorAll("option");
// let p = document.querySelectorAll("p");
// let a = document.querySelector(".choices .red");
// console.log(a)
// const change = ()=>{
// choice.forEach((choice)=>{
//     q = choice.childNodes[1].className;
// console.log(q)
// }
// )
// }
// change()
// choice.addEventListener("click",change);

// const vc = ()=>{
//     dd.forEach((option)=>{
//         p=(option.text);
//             body.style.backgroundColor = p;
//             console.log(p)
//     });
// }

// let red = document.querySelector(".red");
// let blue = document.querySelector(".blue")
// red.addEventListener("click",()=>{
//     body.style.backgroundColor = "red";
// });
// blue.addEventListener("click",()=>{
//     body.style.backgroundColor = "blue";
// });

// let choice = document.querySelectorAll("p");
// for(let a of choice){
// console.log(a);
// }


let a = document.querySelector(".container input");
let body = document.querySelector("body");
let choices = document.querySelectorAll("p");
let btn = document.querySelector(".btn");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        color = choice.className;
        if(color=="red"){
            body.style.backgroundColor = "red";
        }
        if(color=="blue"){
            body.style.backgroundColor = "blue";
        }
        if(color=="green"){
            body.style.backgroundColor = "green";
        }
        if(color=="yellow"){
            body.style.backgroundColor = "yellow";
        }
        if(color=="orange"){
            body.style.backgroundColor = "orange";
        }
    })
});
btn.addEventListener("click",()=>{
    body.style.background = a.value;
});

// let i = document.getElementsByTagName("p");
// console.log(i)

// const choice = document.querySelectorAll("option");
//     choice.forEach((choices)=>{
//         choices.addEventListener("change",()=>{
//             console.log(choices);
//         })
//         });

const selects = document.querySelectorAll("select");
selects.forEach((select) => {
    select.addEventListener("change", (event) => {
        const col = event.target.value;
        console.log(col)
        if(col=="red"){
            body.style.backgroundColor = col;
        }else if(col=="blue"){
            body.style.backgroundColor = col;
        }else if(col=="yellow"){
            body.style.backgroundColor = col;
        }else if(col=="green"){
            body.style.backgroundColor = col;
        }else if(col=="pink"){
            body.style.backgroundColor = col;
        }else{
            body.style.backgroundColor = col;
        }
    });
});