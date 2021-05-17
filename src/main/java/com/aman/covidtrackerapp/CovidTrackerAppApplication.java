package com.aman.covidtrackerapp;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.util.ResourceUtils;

import com.aman.covidtrackerapp.dtos.CountryDataProvider;
import com.google.gson.Gson;

import ch.qos.logback.core.Context;

@SpringBootApplication
public class CovidTrackerAppApplication {

	public static void main(String[] args) throws Exception {
		ConfigurableApplicationContext context = SpringApplication.run(CovidTrackerAppApplication.class, args);
	}
	
	public static CountryDataProvider loadCountryDataProvider() throws Exception {
		String content = CovidTrackerAppApplication.loadJSON();
	    Gson gson = new Gson();
	    CountryDataProvider countryDP = gson.fromJson(content, CountryDataProvider.class);
	    return countryDP;
	}
	
	public static String loadJSON() throws Exception{
		//File file = ResourceUtils.getFile("classpath:static/country-state.json");
		Resource resource = new ClassPathResource("static/country-state.json");
	    //InputStream inputStream = new FileInputStream(file);
	    //InputStreamReader isReader = new InputStreamReader(inputStream);
		InputStreamReader isReader = new InputStreamReader(resource.getInputStream());
	    BufferedReader reader = new BufferedReader(isReader);
	    StringBuffer sb = new StringBuffer();
	    String line;
	    
	    while((line = reader.readLine()) != null) {
	    	sb.append(line);
	    }
	    
	    String content = sb.toString();
	    reader.close();
	 
	    return content;
	}

}
