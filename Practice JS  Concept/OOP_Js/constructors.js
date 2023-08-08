class RailwayForm {
    constructor(givenname, trainno) {
      console.log("CONSTRUCTOR CALLED..." + givenname + " "  + trainno)
      this.name = givenname
      this.trainno = trainno
    }
  
    submit() {
    //   alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
    //   alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
  }
  
  let hanzlaForm = new RailwayForm("Hanzla", 145316)
  // No need to Fill the form with hanzlaForm's details
  // hanzlaForm.fill()
  
  // Create & fill a forms for Rizwan
  let rizwanForm1 = new RailwayForm("Rizwan", 222420)
  let rizwanForm2 = new RailwayForm("Rizwan", 2229211)
  
   
  
  hanzlaForm.submit()
  rizwanForm1.submit()
  rizwanForm2.submit()
  rizwanForm1.cancel()