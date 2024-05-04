// //wait the window to load
// window.onload = function(){
//     document.querySelector("h1").style.color = "Blue" ;
// };

// document.write("<h1>لول <span>Page</span></h1>");

console.table(["osama","Ahmed"]);

console.log("Hellofrom %cJS %cFile","color:red","color:blue");

console.log(typeof ["mr", "re", "rs"]);
console.log(typeof {name:"Osama",age:18,country:"Spain"});

let user = "Smsm";
console.log(user)

let lol ='smsm'

let title = "كوسوم السيسي";
let desc="أحا نييييييييك";

// let markUp = `
// <h2>لوللل</h2>
// <div class="card">
//             <div class="child">
//                 <h1>${title}</h1>
//                 <p>${desc}</p>
//             </div>
//         </div>
// `;
//document.write(markUp);
console.log(lol.charAt(lol.length-1))

let a = NaN;
console.log(`The price is ${a || "40"}`)

let so7aby = ["Ahmed", "Mahmoud", "Zoza"];
console.log(`Hello ${so7aby[2]}`);

// let count = 0;
// function kosomelsisi() {
//     const gridContainer = document.getElementById("grid-container");
//     for (let i = 0; i < 10; i++) {
//         const gridItem = document.createElement("div");
//         gridItem.classList.add("grid-item");
//         gridItem.textContent = "كسم السيسي";
//         gridContainer.appendChild(gridItem);
//     }
//     count++;
//     if (count >= 10) {
//         // Clear the interval
//         clearInterval(intervalId);
//         console.log("Interval stopped");
//     }
// }
// // Call the function every 2 seconds
// const intervalId = setInterval(kosomelsisi, 2000); // 1000 milliseconds = 1 seconds
document.addEventListener("DOMContentLoaded", function() {
    let count = 0;

    function kosomelsisi() {
        const gridContainer = document.getElementById("grid-container");

        for (let i = 0; i < 6; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.textContent = "كسم السيسي";
            gridContainer.appendChild(gridItem);
        }

        count++;
        if (count >= 100) {
            // Clear the interval
            clearInterval(intervalId);
            console.log("Interval stopped");
        }
    }

    // Call the function every 2 seconds
    const intervalId = setInterval(kosomelsisi, 500); // 2000 milliseconds = 2 seconds
});