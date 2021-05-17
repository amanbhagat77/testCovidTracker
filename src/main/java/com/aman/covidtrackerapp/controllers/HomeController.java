package com.aman.covidtrackerapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/form")
	public String form() {
		return "form";
	}
	
	@RequestMapping("/updateform")
	public String update() {
		return "updateform";
	}
		
	@RequestMapping("/analytics")
	public String analytics() {
		return "analytics";
	}
	
	@RequestMapping("/dailystats")
	public String dailystats() {
		return "dailystats";
	}
}
