(function(){
  let sentence = document.getElementById("sentence");
  let sentForm = document.getElementById("sentence-form");
  let blankSpace = document.getElementById("space-for-paragraphs");
	

  function doStuff(ev) {
    let paragraph = document.createElement("li");
    let txt = document.createTextNode(sentence.value);
    paragraph.appendChild(txt);
    blankSpace.appendChild(paragraph);
    ev.preventDefault();
  }

  sentForm.addEventListener("submit", doStuff);
	
}());