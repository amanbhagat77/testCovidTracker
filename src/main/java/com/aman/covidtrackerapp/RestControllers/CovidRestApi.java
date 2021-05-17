package com.aman.covidtrackerapp.RestControllers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.aman.covidtrackerapp.CovidTrackerAppApplication;
import com.aman.covidtrackerapp.dao.CountryRepo;
import com.aman.covidtrackerapp.dao.CovidStatRepo;
import com.aman.covidtrackerapp.dtos.GetFigureDto;
import com.aman.covidtrackerapp.dtos.GraphDto;
import com.aman.covidtrackerapp.dtos.Country;
import com.aman.covidtrackerapp.dtos.CountryDataProvider;
import com.aman.covidtrackerapp.dtos.DailyStatDto;
import com.aman.covidtrackerapp.models.CovidStat;

@RestController
public class CovidRestApi {

	@Autowired
	ResourceLoader resourceLoader;
	
	@Autowired
	CovidStatRepo repo;
	
	@Autowired
	CountryRepo repoCountry;
	
	CountryDataProvider countryDP;
	
	public CovidRestApi() throws Exception{
		countryDP = CovidTrackerAppApplication.loadCountryDataProvider();
	}
	
	//GET: /api/covidstats
	@GetMapping("/api/covidstats")
	public List<CovidStat> getCovidSats() {
		return repo.findAll();
	}
	
	//Post: /apicovidstat/object
	@PostMapping("/api/figure")
	public int getFigure(@RequestBody GetFigureDto dto) throws ParseException {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String date1 = dateFormat.format(dto.getDate());
		CovidStat statInDB = repo.getFigure(dto.getAction_type(), new SimpleDateFormat("yyyy-MM-dd").parse(date1), dto.getCountry(), dto.getRegion());
		System.out.println(statInDB);
		if(statInDB == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		return Integer.parseInt(statInDB.getFigure());
	}
	
	//Get: /api/countries
	@GetMapping("/api/countries")
	public List<String> getCountries() throws Exception{
		return countryDP.getCountries();
	}
	
	
	@GetMapping("/api/country/{name}")
	public Optional<Country> getCountryByName(@PathVariable("name") String name) throws Exception{	
	    Optional<Country> country = countryDP.getCountryByName(name);
	    return country;
	}
	
	@GetMapping("/api/dailystats/{date}")
	public List<DailyStatDto> getDailyStats(@PathVariable("date") String date) throws ParseException{
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = dateFormat.parse(date);
		return repo.getDailyStat(date1);
	}
	
	//Post: /api/covidstat
	@PostMapping("/api/covidstat")
	public CovidStat saveStat(@RequestBody CovidStat stat){
		CovidStat statInDB = repo.getFigure(stat.getAction_type(), stat.getDate(), stat.getCountry(), stat.getRegion());
		if(statInDB != null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		
		repo.save(stat);
		return stat;
	}
	
	//Put: /api/covidstat
	@PutMapping("/api/covidstat")
	public CovidStat saveOrUpdateStat(@RequestBody CovidStat stat) {
		
		CovidStat statInDB = repo.getFigure(stat.getAction_type(), stat.getDate(), stat.getCountry(), stat.getRegion());
		if(statInDB == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		repo.delete(statInDB);
		repo.save(stat);
		return stat;
	}
	
	
	//Post: get data for graph
	@PostMapping("/api/graph")
	public List<Map<Date,Integer>> getGraphData(@RequestBody GraphDto dto){
		
		//System.out.println(dto);
		//Returning data for all the countries
		if(dto.getCountry().equals("worldwide")) {
			return repo.getFigureByActionTypeAllCountries(dto.getAction_type(), dto.getTimeperiod());
		}
		
		// Returning data for all regions in the country
		if(dto.getRegion().equals("allregions")) {
			return repo.getFiguresByActionTypeCountryWise(dto.getCountry(), dto.getAction_type(), dto.getTimeperiod());
		}

		//Returning data for the particular region in the selected country
		return repo.getFiguresByActionTypeRegionWise(dto.getCountry(), dto.getAction_type(), dto.getRegion(), dto.getTimeperiod());

	}
	
	
}
