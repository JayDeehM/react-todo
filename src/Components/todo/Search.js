import React, { Component } from 'react';

class SearchList extends Component {

	search() {
		var input = document.getElementById("myInput");
    	var filter = input.value.toUpperCase();
    	var lis = document.getElementsByTagName("li");
	    for (var i = 0; i < lis.length; i++) {
	        var a = lis[i].innerHTML;
	        if (a.toUpperCase().indexOf(filter) === 0) {
	            lis[i].style.display = "list-item";
	        } else {
	            lis[i].style.display = "none";

	        }
	    }
	}

	render(){
		return (
			<input id='myInput' onChange={() => this.search()} placeholder="Search list.." />
		)
	}
}

export default SearchList;