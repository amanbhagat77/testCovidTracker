<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dashboard</title>
</head>
<body>
<%@ include file = "header.jsp" %>
<div class="container">
<br>
<div class="jumbotron">
  <h1 class="display-4">Dashboard</h1>
  <p class="lead">Welcome to CovidStats Dashboard</p>
  <hr class="my-4">
  <p>Please click on the below buttons to add or modify data</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/form" role="button">Add</a>
    <a class="btn btn-primary btn-lg" href="/updateform" role="button">Update</a>
  </p>
</div>
<div id = "dailystats">
<%@ include file = "dailystats.jsp" %>
</div>
<div id = "analytics">
<%@ include file = "analytics.jsp" %>
</div>
 


</div>
<%@ include file = "footer.jsp" %>
</body>
</html>