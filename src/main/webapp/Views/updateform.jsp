<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Update Form</title>
</head>
<body>
<%@ include file = "header.jsp" %>
<div class="container">
<br>

<h2>Update Data</h2>

<form id="updateForm" method="post">
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
    <div class="form-group col-md-4 figure-group" style="display:none">
        <label>Figure</label>
            <input id="figure" name="figure" type="number" class="form-control" required/>
    </div>
    <button class="btn btn-primary ml-3" value="Fetch" id="fetchBtn">Fetch</button>
    <button class="btn btn-primary ml-3" value="Update" id="updateBtn">Update</button>
</form>
</div>
<%@ include file = "footer.jsp" %>
<script src = "/static/js/updateform.js"></script>
</body>
</html>