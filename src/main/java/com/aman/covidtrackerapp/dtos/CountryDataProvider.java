package com.aman.covidtrackerapp.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CountryDataProvider {
	
	@Autowired
	private List<Country> countries;
	
	public Optional<Country> getCountryByName(String name){
		return countries.stream()
				.filter(country -> country.getCountry().equals(name))
				.findFirst();
	}
	
	public List<String> getCountries(){
		List<String> countryNames = new ArrayList<>();
		for(Country country : countries) {
			countryNames.add(country.getCountry());
		}
		return countryNames;
	}
	
}
