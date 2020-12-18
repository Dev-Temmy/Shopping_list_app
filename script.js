var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var buttonDelete = document.getElementsByClassName("Delete")[0];//
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");//to create and store value in li

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button = document.createElement("button") //create a button element
	button.appendChild(document.createTextNode("Done!")) //name it and append it to document
	li.appendChild(button) //append it to each list item
	button.onclick = "deleteListAfterClick";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListAfterClick() {
	//var li =document.onclick("li");
	

	//li.parentNode.removeChild(li);
	//ul.removeChild(li);
	//ul.remove(li); //this will remove every li but we need to remove corresponding li
	 for (i = 0; i < li.length; i++) {
		ul.removeChild(li[i]) //this will remove the odd number items
	 }


}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

buttonDelete.addEventListener("click", deleteListAfterClick);


