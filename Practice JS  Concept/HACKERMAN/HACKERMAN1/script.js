const hackerman = async () => {
    const friendName = document.getElementById("friend").value.trim();
    let outputElement = document.getElementById("output");
  
    if (friendName === "") {
      outputElement.innerHTML = "Please enter a friend's name.";
      return;
    }
  
    outputElement.innerHTML = `Hacking ${friendName}...<br><br>`;
  
    let connectPhone = new Promise((resolve, reject) => {
      setTimeout(() => {
        outputElement.innerHTML += `Connecting to ${friendName}'s phone...<br><br>`;
        resolve();
      }, 1000);
      setTimeout(() => {
        outputElement.innerHTML += `Successfully connected to ${friendName}'s phone...<br><br>`;
        resolve();
      }, 2000);
    });
  
    let instagramPass = new Promise((resolve, reject) => {
      setTimeout(() => {
        outputElement.innerHTML += `Hacking ${friendName}'s Instagram password...<br><br>`;
      }, 3000);
      setTimeout(() => {
        outputElement.innerHTML += `${friendName}'s Instagram password hacked successfully...<br><br>`;
        resolve();
      }, 4000);
    });
  
    let phonePass = new Promise((resolve, reject) => {
      setTimeout(() => {
        outputElement.innerHTML += `Diving into ${friendName}'s file manager...<br><br>`;
      }, 6000);
      setTimeout(() => {
        outputElement.innerHTML += `Successfully done...<br><br>`;
      }, 7000);
      setTimeout(() => {
        outputElement.innerHTML += `Successfully hacked ${friendName}'s phone...<br><br>`;
        resolve();
      }, 8000);
    });
  
    try {
      await connectPhone;
      await instagramPass;
      await phonePass;
      outputElement.innerHTML += "Done!";
    } catch (error) {
      outputElement.innerHTML += "An error occurred while hacking.";
    }
  };
  
  function hack() {
    hackerman();
  }
  