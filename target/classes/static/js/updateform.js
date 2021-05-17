//UI Vars
const form = document.getElementById('updateForm');
const fetchBtn = document.getElementById('fetchBtn');
const updateBtn = document.getElementById('updateBtn');
const date = document.getElementById('date');
const country = document.getElementById('country');
const region = document.getElementById('region');
const actionType = document.getElementById('actionType');
const figure = document.getElementById('figure');
const figureGroup = document.querySelector('.figure-group');



$(document).ready(function(){
	fetchBtn.addEventListener('click', fetchData);
	updateBtn.addEventListener('click', updateData);
	loadCountries();
	country.addEventListener('change', loadStates);
})

//Loading Countries
function loadCountries(){
	$.ajax({
		url: "/api/countries",
		method: "get"
	}).done(function(result){
		result.forEach(function(c){
			let option = document.createElement('option');
			option.className = 'countries';
			option.value = c;
			option.append(document.createTextNode(c));
			country.append(option)
			//console.log(country);
			
		})
	})
}

//loading States
function loadStates(){
	$.ajax({
		url: "/api/country/" + country.value,
		method: "get"
	}).done(function(result){
		while(region.firstElementChild != null){
			region.removeChild(region.firstElementChild);
		}
		
		result.states.forEach(function(s){
			let option = document.createElement('option');
			option.className = 'states';
			option.value = s;
			option.append(document.createTextNode(s));
			region.append(option);

		})
	})
}


function fetchData(e){
	e.preventDefault();
	var viewModel = {
		action_type: actionType.value,
        date: date.value,
        country: country.value,
        region: region.value,
	}
	
	$.ajax({
		url: "/api/figure",
		method: "post",
		data: JSON.stringify(viewModel),
		contentType: "application/json",
    	dataType: "json"
	}).done(function(result){
		toastr.success("Data Fetched Successfully");
		figureGroup.style.display = "block";
		figure.value = result;
		date.disabled = true;
		country.disabled = true;
		region.disabled = true;
		actionType.disabled = true;
		viewModel = {};
	})
	.fail(function(){
		toastr.error("Entry is not present in Database");
	})
	
}

/*function onSuccessfulFetch(result){
	
}*/


//Submit Event Handler
function updateData(e){
	e.preventDefault();
	if(figure.value === ""){
		toastr.error("Data must be fetched before updating");
		return;
	}
	var viewModel = {
		action_type: actionType.value,
        date: date.value,
        country: country.value,
        region: region.value,
        figure: figure.value
	}
	
	$.ajax({
		url: "/api/covidstat",
		method: "put",
		data: JSON.stringify(viewModel),
		contentType: "application/json; charset=utf-8",
    	dataType: "json"
	}).done(function(){
		toastr.success("Data updated successfully");
        form.reset();
        date.disabled = false;
		country.disabled = false;
		region.disabled = false;
		actionType.disabled = false;
        viewModel = {};
	}).fail(function(){
		toastr.error("Something unexpected happened. ");
	})
	
	
}