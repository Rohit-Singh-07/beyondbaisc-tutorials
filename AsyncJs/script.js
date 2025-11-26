let a = 10;
let b = 5;
let c = 7;

fetch('https://randomuser.me/api/?results=10')
.then (raw => raw.json())
.then(readableData => console.log(readableData))

axios.get('https://randomuser.me/api/?results=10') // is more dev friendly
.then(result => (result))

// async and await
// promises (waiting -> resolve/fail)
// calbacks -> functions called inside a function


setTimeout(cal)

function something() {
    function newFunc() {
        console.log("hey")
    }
}

