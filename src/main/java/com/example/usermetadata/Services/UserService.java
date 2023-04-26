package com.example.usermetadata.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usermetadata.Entity.UserMetaData;
import com.example.usermetadata.Repository.UserRepo;


@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	
	
	
	public UserService() {
		super();
		// TODO Auto-generated constructor stub
	}

	//submit the data into database
	public UserMetaData saveUserMetaDataToDB(UserMetaData metaData)
	{
		
		return userRepo.save(metaData);
	}
	
	//retrieve the data from the database
	public UserMetaData getUserDetailsFromDB(String userId)
	{
		return userRepo.findAllByUniqueId(userId);
	}
	
}
