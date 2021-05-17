//UI Vars
const dateInput = document.getElementById('dateInput');
const table = document.querySelector('.table');
const tableBody = document.querySelector('.table-body')

$(document).ready(function(){
	let today = new Date().toISOString().slice(0, 10)
	genertateTable(today)
	dateInput.addEventListener('change', function(){
		const date = dateInput.value;
		//console.log(date);
		randomJob();
		genertateTable(date);
	})
})


function randomJob(){
	console.log(dateInput.value);
}

function genertateTable(date){
	$.ajax({
		url: "/api/dailystats/" + date,
		method: "get"
		
	}).done(function(result){
		
		while(tableBody.firstElementChild !== null){
			tableBody.removeChild(tableBody.firstElementChild);
		}
		//tableBody.innerHTML = "";
		result.forEach(function(row){
			const tableRow = document.createElement('tr');
				console.log(row);
				let tableData = document.createElement('td');
				tableData.append(document.createTextNode(row.date));				
				tableRow.append(tableData);
				
				tableData = document.createElement('td');
				tableData.append(document.createTextNode(row.action_type));				
				tableRow.append(tableData);
				
				tableData = document.createElement('td');
				tableData.append(document.createTextNode(row.country));				
				tableRow.append(tableData);
				
				tableData = document.createElement('td');
				tableData.append(document.createTextNode(row.region));				
				tableRow.append(tableData);
				
				tableData = document.createElement('td');
				tableData.append(document.createTextNode(row.figure));				
				tableRow.append(tableData);
				
				tableData = document.createElement('td');
				tableData.append(document.createTextNode(row.total));				
				tableRow.append(tableData);
				
			tableBody.append(tableRow);
		})
		
	})
}