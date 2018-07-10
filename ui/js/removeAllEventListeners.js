// Method for removing event listeners taken from
// https://stackoverflow.com/questions/3222486/remove-all-javascript-event-listeners-of-an-element-and-its-children
// Need to use the cloneNode method to just make a copy and replace the old element with the new element.

function removeAllEventListeners(oldElementID) {
	// Find the old element.
	var oldElement = document.getElementById(oldElementID);
	// Clone the old element.
	var newElement = oldElement.cloneNode(true);
	// Replace the old element with the new element.
	oldElement.parentNode.replaceChild(newElement, oldElement);
}
