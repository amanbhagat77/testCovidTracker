//UI Vars - bar graph form
const form = document.getElementById('bar-graph-form');
const actionTypeInput = document.getElementById('actionType');
const countryInput = document.getElementById('country');
const regionInput = document.querySelector('#region');
const timePeriodInput = document.getElementById('timeperiod');
const chart = document.getElementById('myChart');
const cardBody = document.querySelector('.card-body');

let labels;
let label;
let data;
let config;

var myChart;

//UI Vars - line Graph
const formLG = document.getElementById('bar-graph-form');
const actionTypeInputLG = document.getElementById('actionType2');
const countryInputLG = document.getElementById('country2');
const regionInputLG = document.querySelector('#region2');
const timePeriodInputLG = document.getElementById('timeperiod2');
const chartLG = document.getElementById('myChart2');

let labelsLG;
let labelLG;
let dataLG;
let configLG;

var myChartLG;


//When document is loaded
$(document).ready(function(){
	
	//Loading Country and states
	loadCountries();
	countryInput.addEventListener('change', loadStates);
	
	//Bar Graph
	const vm = loadObject(false);
 	fetchGraphData(vm).done(generateGraph);
	countryInput.addEventListener('change', generateGraphEvent);
	regionInput.addEventListener('change', generateGraphEvent);
	timePeriodInput.addEventListener('change', generateGraphEvent);
	actionTypeInput.addEventListener('change', generateGraphEvent)
	
	
	//Line Graph
	const isLine = true;
	loadCountriesLG();
	countryInput.addEventListener('change', loadStatesLG);
	const vmLG = loadObject(isLine);
	fetchGraphData(vmLG).done(generateLineGraph);
	countryInputLG.addEventListener('change', generateLineGraphEvent);
	regionInputLG.addEventListener('change', generateLineGraphEvent);
	timePeriodInputLG.addEventListener('change', generateLineGraphEvent);
	actionTypeInputLG.addEventListener('change', generateLineGraphEvent)
})

function generateGraphEvent(){
	myChart.destroy();
	const vm = loadObject(false);
 	fetchGraphData(vm).done(generateGraph);
}

function generateGraph(graphData){
	loadGraphData(graphData);
	myChart = new Chart(
    	chart,
    	config
  	);
}


function generateLineGraphEvent(){
	myChartLG.destroy();
	const vm = loadObject(true);
 	fetchGraphData(vm).done(generateLineGraph);
}

function generateLineGraph(lineGraphData){
	loadLineGraphData(lineGraphData);
	myChartLG = new Chart(
    	chartLG,
    	configLG
  	);
}


function loadLineGraphData(lineGraphData){
	
	let labelLG = "";

	const val = parseInt(timePeriodInputLG.value);
	
	if(val ===  7){
		labelLG += actionTypeInput.value + " in Last 7 days";
		
	}
	else if(val ===  15){
		labelLG += actionTypeInput.value + " in Last 15 days";
	}
	
	else if(val ===  30){
		labelLG += actionTypeInput.value + " in Last 1 Month";
	}
	
	else if(val ===  90){
		labelLG += actionTypeInput.value + " in Last 3 Months";
	}
	
	else if(val ===  2147483647){
		labelLG += actionTypeInput.value + " all time period";
	}
	
	dataLG = {
	  		datasets: [{
	    	label: labelLG,
	    	data: lineGraphData,
	    	fill: true,
	    	borderColor: 'rgb(75, 192, 192)',
	    	tension: 0.1
  		}]
	};
	
	configLG = {
  		type: 'line',
  		data: dataLG,
  		options: {
				parsing: {
        				xAxisKey: 'date',
        				yAxisKey: actionTypeInput.value
   						 }
				}
			};
		
}


function loadGraphData(graphData){
	
	let label = "";
		
	const val = parseInt(timePeriodInput.value);
	
	if(val ===  7){
		label += actionTypeInput.value + " in Last 7 days";
		
	}
	else if(val ===  15){
		label += actionTypeInput.value + " in Last 15 days";
	}
	
	else if(val ===  30){
		label += actionTypeInput.value + " in Last 1 Month";
	}
	
	else if(val ===  90){
		label += actionTypeInput.value + " in Last 3 Months";
	}
	
	else if(val ===  2147483647){
		label += actionTypeInput.value + " all time period";
	}

	
	 data = {
				  datasets: [{
				    label: label,
				    data: graphData,
				    backgroundColor: [
				      'rgba(54, 162, 235, 0.2)'
				    ],
				    borderColor: [
				      'rgb(54, 162, 235)',
				    ],
				    borderWidth: 1
				  }]
				};
	
	config = {
				  type: 'bar',
				  data: data,
				  options: {
				    scales: {
				      y: {
				        beginAtZero: true
				      }
				    },
				    
				    plugins: {
						legends : {
							display: false
						},
						tooltips: {
							enabled: false
						}
					},
					parsing: {
        				xAxisKey: 'date',
        				yAxisKey: actionTypeInput.value
   						 }
  					},
			};
					
}

function loadObject(isLine){
	if(isLine === false){
			return vm = {
			country : countryInput.value,
			region : regionInput.value,
			timeperiod: timePeriodInput.value,
			action_type: actionTypeInput.value
		}
	}
	
	return vm = {
			country : countryInputLG.value,
			region : regionInputLG.value,
			timeperiod: timePeriodInputLG.value,
			action_type: actionTypeInputLG.value
		}
	
	
}
function fetchGraphData(vm){
	return $.ajax({
		url: "/api/graph",
		method: "post",
		data: JSON.stringify(vm),
		contentType: "application/json; charset=utf-8",
    	dataType: "json" 
	})
}

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
			countryInput.append(option)
			//console.log(country);
			
		})
	})
}

function loadCountriesLG(){
	$.ajax({
		url: "/api/countries",
		method: "get"
	}).done(function(result){
		result.forEach(function(c){
			let option = document.createElement('option');
			option.className = 'countries';
			option.value = c;
			option.append(document.createTextNode(c));
			countryInputLG.append(option)
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
		while(regionInput.firstElementChild != null){
			regionInput.removeChild(regionInput.firstElementChild);
		}
		
		let option = document.createElement('option');
			option.className = 'states';
			option.value = 'allregions';
			option.defaultSelected = true;
			option.append(document.createTextNode("Show All"));
			regionInput.append(option);

		if(result !== null){
			result.states.forEach(function(s){
			let option = document.createElement('option');
			option.className = 'states';
			option.value = s;
			option.append(document.createTextNode(s));
			regionInput.append(option);

		})
		}
		
	})
}

function loadStatesLG(){
	$.ajax({
		url: "/api/country/" + country.value,
		method: "get"
	}).done(function(result){
		while(regionInputLG.firstElementChild != null){
			regionInputLG.removeChild(regionInputLG.firstElementChild);
		}
		
		let option = document.createElement('option');
			option.className = 'states';
			option.value = 'allregions';
			option.defaultSelected = true;
			option.append(document.createTextNode("Show All"));
			regionInputLG.append(option);
			
		if(result !== null){
			result.states.forEach(function(s){
			let option = document.createElement('option');
			option.className = 'states';
			option.value = s;
			option.append(document.createTextNode(s));
			regionInputLG.append(option);

		})
		}
		
	})
}


