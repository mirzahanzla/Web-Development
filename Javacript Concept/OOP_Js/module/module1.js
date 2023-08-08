const hello = ()=>{
    console.log("Hello Hanzla")
}

const ahello = (name)=>{
    console.log("Hello " + name)
}

module.exports = {hello, ahello};// same as below line
// module.exports = {hello: hello, ahello: ahello};