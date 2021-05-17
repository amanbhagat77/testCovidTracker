package com.aman.covidtrackerapp.dtos;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Country {
	
	private String country;
	private List<String> states;
	
	
	public List<String> getStates() {
		return states;
	}
	public void setStates(List<String> states) {
		this.states = states;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}

	
	@Override
	public String toString() {
		return "Country [country=" + country + ", states=" + states + "]";
	}
	
	
}
