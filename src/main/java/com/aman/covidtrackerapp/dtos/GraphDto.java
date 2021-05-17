package com.aman.covidtrackerapp.dtos;


public class GraphDto {
	private String action_type;
	private String country;
	private String region;
	private int timeperiod;
	
	public String getAction_type() {
		return action_type;
	}
	public void setAction_type(String action_type) {
		this.action_type = action_type;
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
	public int getTimeperiod() {
		return timeperiod;
	}
	public void setTimeperiod(int timeperiod) {
		this.timeperiod = timeperiod;
	}
	
	@Override
	public String toString() {
		return "GraphDto [action_type=" + action_type + ", country=" + country + ", region=" + region + ", timeperiod="
				+ timeperiod + "]";
	}
	
	
	
	
}
