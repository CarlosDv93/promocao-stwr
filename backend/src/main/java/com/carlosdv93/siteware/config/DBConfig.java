package com.carlosdv93.siteware.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.carlosdv93.siteware.service.DBService;

@Configuration
@Profile(value = { "!dev || !test" })
public class DBConfig {
	
	@Autowired
	private DBService dbService;
	
	public boolean instantiateDatabase() {
		dbService.instatiateDatabase();
		return true;
	}

}
