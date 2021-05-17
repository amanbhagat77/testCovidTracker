package com.aman.covidtrackerapp.dtos;

import java.sql.Date;

public interface DailyStatDto {
	String getaction_type();
	String getcountry();
	String getregion();
	Date getdate();
	Integer getfigure();
	Integer gettotal();
	
}
