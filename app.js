function showAlert() {
    alert("This is an alert message!");
}

function askName() {
    const name = prompt("What is your name?");
    if (name) {
        alert("Hello, " + name + "!");
    }
}

let counter = 0;

function increment() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

function decrement() {
    counter--;
    document.getElementById('counter').textContent = counter;
}


for (let i = 1; i <= 5; i++) {
    console.log("Loop iteration: " + i);
}
