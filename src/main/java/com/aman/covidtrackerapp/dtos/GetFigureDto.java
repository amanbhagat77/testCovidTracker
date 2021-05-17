package com.aman.covidtrackerapp.dtos;

import java.util.Date;

public class GetFigureDto {
	private String action_type;
	private Date date;
	private String country;
	private String region;
	
	
	public String getAction_type() {
		return action_type;
	}
	public void setAction_type(String action_type) {
		this.action_type = action_type;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	
	@Override
	public String toString() {
		return "GetFigureDto [action_type=" + action_type + ", date=" + date + ", country=" + country
				+ ", region=" + region + "]";
	}
	
	
	
}

