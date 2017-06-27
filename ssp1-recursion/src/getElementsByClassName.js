// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
 var getElementsByClassName = function(className, element) {

	var arr = []
	if (element === undefined) {
		element = document.body //only runs first time, so that we check the entire page for a className in next if statement
	}
	else {
		element = element
	}

	//check if element called recursively is part of a specific class
	if (element.classList.contains(className)){
		arr.push(element)
	}

	for (var i = 0; i < element.children.length; i++) {
		  var recursed =(getElementsByClassName(className, element.children[i]));
		  $.merge(arr, recursed) //combines multiple arrays bc we create one each time getElementsByClassName gets called
	}
	return arr
	};

