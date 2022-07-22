document.getElementById("submit").addEventListener(
  "click", //when the submit button is clicked
  function () {
    let fileInput = document.getElementById("upload"); //get the file from the upload
    let blob = new Blob([fileInput.files[0]]); //create the blob from the upload
    ImageAPI.analyseFacesBlob(blob, function (data) {
      //analyse the blob and return the data
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          //add i by one and define i as the face
          let age = data[i].faceAttributes.age; //get the age
          let gender = data[i].faceAttributes.gender; //get the gender
          myText.innerHTML =
            "<h2> You look like a " + age + " year old " + gender + "</h2>"; //display the results
          var list = { //list of descriptions
            belowTwenty:
              "Limited wrinkles and skin is smooth under the eyes. You may often get mistaken for being younger than you are.",
            twentyThirty:
              "A few lines on the face near the jaw and the side of the eyes. A few grey hairs may appear.",
            thirtyForty:
              "Lines become more apparent as well as sun damage that may have built up.",
            fortyFifty:
              "Signs of ageing are more apparent as well as skin damage that may have built up over time.",
            fiftySixty: "Skin will be more sagging and age will be apparent.",
            sixtyPlus: "You look old. Haha.",
          };
          if (age >= 0 && age <= 24) {
            myAge.innerHTML = `<h2> Here is why you may look this age: <br><br>${list.belowTwenty}</h2>`; //return for someone aged 25 or below
          } else if (age >= 25 && age <= 34) {
            myAge.innerHTML = `<h2> Here is why you may look this age: <br><br>${list.twentyThirty}</h2>`; //return for someone aged below 35 and above 25
          } else if (age >= 35 && age <= 44) {
            myAge.innerHTML = `<h2> Here is why you may look this age: <br><br>${list.thirtyForty}</h2>`; //return for someone aged below 45 and above 35
          } else if (age >= 45 && age <= 54) {
            myAge.innerHTML = `<h2> Here is why you may look this age: <br><br>${list.fortyFifty}</h2>`; //return for someone aged below 55 and above 45
          }else if (age >= 55 && age <= 64) {
            myAge.innerHTML = `<h2> Here is why you may look this age: <br><br>${list.fiftySixty}</h2>`; //return for someone aged below 65 and above 55
          }else if (age >= 65 && age <= 64438590859085) {
            myAge.innerHTML = `<h2> Here is why you may look this age: <br><br>${list.sixtyPlus}</h2>`; //return for someone aged below 64438590859086 and above 65
          }
        }
      }
    });
  }
);
