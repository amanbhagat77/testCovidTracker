<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Form</title>
</head>
<body>
<%@ include file = "header.jsp" %>
<div class="container">
<br>

<h2>Add a New Entry</h2>

<form id="newEntry" method="post">
    <div class="form-group col-md-4">
        <label>Action Type</label>
        <select id="actionType" name="actionType" class="form-control">
            <option>New Cases</option>
            <option>Deaths</option>
            <option>Tests</option>
            <option>Vaccination</option>
        </select>
    </div>

    <div class="form-group col-md-4">
        <label>Date</label>
        <input id="date" name="date" type="date" class="form-control" required/>
    </div>
    <div class="form-group col-md-4">
        <label>Country</label>
           <select id="country" name="country" class="form-control" required>
           	<option value="none" selected disabled hidden>
	          	Select an Option
           </select>
    </div>
    <div class="form-group col-md-4">
        <label>Region</label>
            <select id="region" name="region" class="form-control" required>
            </select>
    </div>
    <div class="form-group col-md-4">
        <label>Figure</label>
            <input id="figure" name="figure" type="number" class="form-control" required/>
    </div>
    <button class="btn btn-primary ml-3" id="submitBtn">Submit</button>
</form>
</div>
<%@ include file = "footer.jsp" %>
<script src="static/js/form.js"></script>
</body>
</html>