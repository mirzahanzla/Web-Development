class RailwayForm {
  submit() {
    alert(
      this.name + ": Your form is submitted for train number: " + this.trainno
    );
  }
  cancel() {
    alert(
      this.name + ": This form is cancelled for train number: " + this.trainno
    );
  }
  fill(givenname, trainno) {
    this.name = givenname;
    this.trainno = trainno;
  }
}

// Create a form for Hanzla
let hanzlaForm = new RailwayForm();
// Fill the form with Hanzla's details
hanzlaForm.fill("Hanzla", 145316);

// Create a forms for Rizwan
let rizwanForm1 = new RailwayForm();
let rizwanForm2 = new RailwayForm();
// Fill the forms with Rizwan's details
rizwanForm1.fill("Rizwan", 222420);
rizwanForm2.fill("Rizwan", 2229211);

hanzlaForm.submit();
rizwanForm1.submit();
rizwanForm2.submit();
rizwanForm1.cancel();
