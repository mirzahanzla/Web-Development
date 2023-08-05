const myArr = [
    "Initializing Network",
    "Connecting to service...",
    "Retreiving username...",
    "Username found....",
    "Trying a combination of 4.5 Trillion passwords...",
    "Password found...",
    "Connecting to Facebook...",
    "Success"
  ]
  
  let timeing = async (duration) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, duration * 1500);
    })
  }
  
  let myFunc = async (index) => {
    await timeing(1)
    let element = myArr[index]
    text.innerHTML = text.innerHTML + element + "<br>" + "<br>"
    // console.log("Software done " + element)
  }
  
  let main = async () => {
    for (let index = 0; index < myArr.length; index++) {
      await myFunc(index)
    }
  }
  
  main()