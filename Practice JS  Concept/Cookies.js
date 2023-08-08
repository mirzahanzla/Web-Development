console.log(document.cookie)
document.cookie = "name=hanzla1122334400"
document.cookie = "name2=hanzla11223344002"
document.cookie = "name=hanzla"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)