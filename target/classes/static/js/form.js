//UI Vars 
const form = document.getElementById('newEntry');
const submitBtn = document.getElementById('submitBtn');
const date = document.getElementById('date');
const country = document.getElementById('country');
const region = document.getElementById('region');
const actionType = document.getElementById('actionType');
const figure = document.getElementById('figure');


//Ui Vars -- Line Graph Card


$(document).ready(function(){
	submitBtn.addEventListener('click', submitForm);
	
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


//Submit Event Handler
function submitForm(e){
	if(figure.value === ""){
		toastr.error("Figure cannot be blank ");
		return;
	}
	
	e.preventDefault();
	var viewModel = {
		action_type: actionType.value,
        date: date.value,
        country: country.value,
        region: region.value,
        figure: figure.value
	}
	
	$.ajax({
		url: "/api/covidstat",
		method: "post",
		data: JSON.stringify(viewModel),
		contentType: "application/json; charset=utf-8",
    	dataType: "json"
	}).done(function(){
		console.log(viewModel);
		toastr.success("Entry Successfully added to the database.");
        form.reset();
        viewModel = {};
	}).fail(function(jqXHR, textStatus, errorThrown){
		if(textStatus.localeCompare("400")){
			toastr.error("Data already Exists ");
			return;
		}
		toastr.error("Something unexpected happened. ");
	})
	
	
}