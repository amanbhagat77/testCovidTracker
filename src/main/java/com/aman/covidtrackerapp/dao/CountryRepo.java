package com.aman.covidtrackerapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aman.covidtrackerapp.models.Country;

public interface CountryRepo extends JpaRepository<Country, Integer> {

}
