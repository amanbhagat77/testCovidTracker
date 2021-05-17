package com.aman.covidtrackerapp.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aman.covidtrackerapp.dtos.DailyStatDto;
import com.aman.covidtrackerapp.models.CovidStat;

public interface CovidStatRepo extends JpaRepository<CovidStat, Integer>{

	@Query(value = "Select * from covidstats where action_type=?1 and date=?2 and country=?3 and region=?4",nativeQuery = true)
	public CovidStat getFigure(String action_type,Date date, String country, String region);
	
	@Query(value = "select date, sum(figure) as ?2 from covidstats where country =?1 and action_type =?2 and region =?3 and datediff(curdate(), date) < ?4 group by date order by date asc", nativeQuery = true)
	public List<Map<Date, Integer>> getFiguresByActionTypeRegionWise(String country, String action_type, 
						String region, int timeperiod);
	
	@Query(value = "select date, sum(figure) as ?2 from covidstats where country =?1 and action_type =?2 and datediff(curdate(), date) < ?3 group by date order by date asc", nativeQuery = true)
	public List<Map<Date, Integer>> getFiguresByActionTypeCountryWise(String country, String action_type, int timeperiod);
	
	@Query(value = "select date, sum(figure) as ?1 from covidstats where action_type =?1 and datediff(curdate(), date) < ?2 group by date order by date asc", nativeQuery = true)
	public List<Map<Date, Integer>> getFigureByActionTypeAllCountries(String action_type, int timeperiod);
	
	@Query(value = "select date, action_type, country, region, figure, sum(figure) over (partition by region) as total from covidstats where date <= ?1 order by date desc", nativeQuery = true)
	public List<DailyStatDto> getDailyStat(Date date);
}
