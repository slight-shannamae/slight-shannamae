function Store(){
	var num_nodes = document.getElementById("num_nodes").value;
	console.log(num_nodes);
	var node = document.getElementById("node_def").value;
	console.log(node);
	var edge = document.getElementById("edge_def").value;
	console.log(edge);
	console.log(typeof(Storage));
	if (typeof(Storage) != null) {
		localStorage.setItem("nodeDefinition", node);
		//here is a second way to set values
		localStorage.number= num_nodes;
		localStorage.edgeDefinition = edge;
	}
	console.log(localStorage.nodeDefinition);
	console.log(localStorage.number);
	console.log(localStorage.edgeDefinition);
}
function Fill(){
	if(localStorage.nodeDefinition !== null){
		document.getElementById("node_def").value = localStorage.nodeDefinition;
	}
	if(localStorage.nodeDefinition !== null){
		document.getElementById("edge_def").value = localStorage.edgeDefinition;
	}
	//here is a second way to get values
	if(localStorage.nodeDefinition !== null){
		document.getElementById("num_nodes").value = localStorage.getItem("number");
	}
}