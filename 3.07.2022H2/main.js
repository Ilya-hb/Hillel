let username = prompt("Enter your name").trim().replaceAll(" ", "");
let surname = prompt("Enter your surname").trim().replaceAll(" ", "");
let email = prompt("Enter your email").trim().replaceAll(" ", "").toLowerCase();
let date = prompt("Year of birth").trim().replaceAll(" ", "");
let year = new Date().getFullYear();
let currentAge = year - date;

document.write(`<ul><li>Full name: ${username} ${surname}</li>`)

if (!email.includes("@")) {
    let error = `Not valid email <b>${email}</b> (symbol @ not exist)`
    document.write(`<li>Email: ${error}</li>`)
} else if (email.startsWith('@')) {
    let error = `Not valid email <b>${email}</b> (symbol @ find in first place)`
    document.write(`<li>Email: ${error}</li>`)
} else if (email.endsWith('@')) {
    let error = `Not valid email <b>${email}</b> (symbol @ find in last place)`
    document.write(`<li>Email: ${error}</li>`)
} else {
    document.write(`<li>Email: ${email}</li>`)
}

if (date.includes(NaN) || date.length !== 4) {
    let error = `Not valid birthdate`
    document.write(`<li>${error}, ${date}</li></ul>`)
} else {
    document.write(`<li>Age: ${currentAge}</li></ul>`)
}

// console.log(username);
// console.log(surname);
// console.log(email);
// console.log(currentAge);






