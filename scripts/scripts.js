(function () {
  let sentence = document.getElementById("sentence");
  let sentForm = document.getElementById("sentence-form");
  let blankSpace = document.getElementById("space-for-paragraphs");
  let counter = 0;

  // Get all the data stored in local storage
  if (localStorage.length > 0) {
    // For each item stored in local storage
    for (let i=0; i<localStorage.length; i++) {
      // Write that item of data
      writeSaved(localStorage.getItem(i));
      // Increment the counter so that new items are appended to the list
      counter++;
    }
  }

  function writeValue(page, data) {
    // If the entry is not empty
    if (sentence.value != "") {
      // Store the sentence value within the scope of this function
      let sentenceValue = sentence.value;
      // Create a new list item
      let paragraph = document.createElement("li");
      // variable to store text from user
      let txt = document.createTextNode(sentenceValue);
      // Empty the text box
      sentence.value = "";
      // Add the user text to the html list item
      paragraph.appendChild(txt);
      // Write the user text to the web page
      blankSpace.appendChild(paragraph);
      // Save to local storage
      localStorage.setItem(counter.toString(), sentenceValue);
      // Increment the counter
      counter++;
    } else {
      alert("You cannot enter an empty value");
    }
    // Prevent page reload
    page.preventDefault();
  }

  function writeSaved(data) {
    // Create a new list item
    let paragraph = document.createElement("li");
    // variable to store text from user
    let txt = document.createTextNode(data);
    // Add the user text to the html list item
    paragraph.appendChild(txt);
    // Write the user text to the web page
    blankSpace.appendChild(paragraph);
  }

  function clearData() {
    // Check there is data to clear
    if (localStorage.length > 0){
      // Clear the local data
      localStorage.clear();

      // Reset the HTML
      blankSpace.innerHTML = "";
    }
    // If no data stored, alert the user.
    else {
      alert("No data stored!");
    }
  }

  // Add a listener for the submit action, at which point the writeValue method is run
  sentForm.addEventListener("submit", writeValue);
  sentForm.addEventListener("reset", clearData)
}());
