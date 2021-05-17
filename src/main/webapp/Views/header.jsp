<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="/static/css/toastr.min.css">
    <title>Header</title>
  </head>
<body>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
	<div class="container">
	 <a class="navbar-brand" href="/">CovidStats</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	    <div class="navbar-nav">
	      <a class="nav-item nav-link" href="/form">Add Data <span class="sr-only">(current)</span></a>
	      <a class="nav-item nav-link" href="/updateform">Update Data</a>
	      <a class="nav-item nav-link" href="/#dailystats">Daily Stats</a>
	      <a class="nav-item nav-link" href="/#analytics">Analytics</a>
	    </div>
	  </div>
	</div>
</nav>
</body>
</html>