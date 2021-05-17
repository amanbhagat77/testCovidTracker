<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Daily Stats</title>
<style>
	.table-stats{
		max-height : 300px
	}
</style>
</head>
<body>
<div class="container"><br>
	<div class="table-head row">
		<div class="col-sm-6">
			<h2 >Daily Stats</h2>
		</div>
		<div class = "col-sm-6 clearfix">
			<form class="form-inline float-right">
				<div class="floatd-right">
					<input type = "date" id ="dateInput" name="date" class = "form-control form-control-sm" ></input><br>
				</div>
			</form>
		</div>
	</div>
	<div class="table-stats  table-responsive">
		<table class="table">
		  <thead class="thead-light">
		    <tr>
		      <th scope="col">Date</th>
		      <th scope="col">Action Type</th>
		      <th scope="col">Country</th>
		      <th scope="col">Region</th>
		      <th scope="col">Figure</th>
		      <th scope="col">Total</th>
		    </tr>
		  </thead>
		  <tbody class ="table-body">

		  </tbody>
		</table>
	</div>
		
</div>
<%@ include file = "footer.jsp" %>
<script src = "/static/js/dailystats.js"></script>
</body>
</html>