<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Analytics</title>
</head>
<body>
<div class="container">
<br>
<h2>Analytics</h2>

<div class ="row">
	<div class = "col-sm-6">
		<div class="card bar-graph">
  			<div class="card-header">
    			<form class = "form-inline" id ="bar-graph-form">
    				<div class = "form-group">
    					<label class="sr-only">Action Type</label>
    					<select id="actionType" name="actionType" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option selected>New Cases</option>
				            <option>Deaths</option>
				            <option>Tests</option>
				            <option>Vaccination</option>
        				</select>
    				</div>
    				
    				<div class = "form-group">
    					<label class="sr-only">Country</label>
    					<select id="country" name="country" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option value ="worldwide" selected>Worldwide</option>
        				</select>
    				</div>
    				
    				<div class = "form-group">
    					<label class="sr-only">Regions</label>
    					<select id="region" name="region" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option value ="allregions" selected>Show All</option>
        				</select>
    				</div>
    				
    				<div class = "form-group">
    					<label class="sr-only">Time Period</label>
    					<select id="timeperiod" name="timeperiod" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option value ="7">Last 7 days</option>
            				<option value ="15">Last 15 days</option>
            				<option value ="30">Last 1 Month</option>
            				<option value ="90">Last 3 Months</option>
            				<option value ="2147483647" selected>All time</option>
        				</select>
    				</div>
    			</form>
  			</div>
  			<div class="card-body">
    			<canvas id="myChart"></canvas>
  			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="card line-graph">
  			<div class="card-header">
    			<form class = "form-inline" id ="line-graph-form">
    				<div class = "form-group">
    					<label class="sr-only">Action Type</label>
    					<select id="actionType2" name="actionType2" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option selected>New Cases</option>
				            <option>Deaths</option>
				            <option>Tests</option>
				            <option>Vaccination</option>
        				</select>
    				</div>
    				
    				<div class = "form-group">
    					<label class="sr-only">Country</label>
    					<select id="country2" name="country2" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option value ="worldwide" selected>Worldwide</option>
        				</select>
    				</div>
    				
    				<div class = "form-group">
    					<label class="sr-only">Regions</label>
    					<select id="region2" name="region2" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option value ="allregions" selected>Show All</option>
        				</select>
    				</div>
    				
    				<div class = "form-group">
    					<label class="sr-only">Time Period</label>
    					<select id="timeperiod2" name="timeperiod2" class="form-control form-control-sm mb-2 mr-sm-2">
            				<option value ="7">Last 7 days</option>
            				<option value ="15">Last 15 days</option>
            				<option value ="30">Last 1 Month</option>
            				<option value ="90">Last 3 Months</option>
            				<option value ="2147483647" selected>All time</option>
        				</select>
    				</div>
    			</form>
  			</div>
  			<div class="card-body">
    			<canvas id="myChart2"></canvas>
  			</div>
		</div>
	</div>
	
</div>

</div>
<%@ include file = "footer.jsp" %>
<script src="static/js/analytics.js"></script>
</body>
</html>