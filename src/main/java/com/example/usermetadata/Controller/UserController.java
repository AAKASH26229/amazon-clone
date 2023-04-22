package com.example.usermetadata.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.usermetadata.Entity.UserMetaData;

@RestController
@RequestMapping("/amazon/users/")
public class UserController {

	@PostMapping("saveUserDetails")
	public UserMetaData saveUserDetails(@RequestBody UserMetaData UserData) {
		return new UserMetaData();
	}
	
	@GetMapping("getUserDetails/{userId}")
	public UserMetaData getuserDetails(@PathVariable String userId) {
		return new UserMetaData();
	}
	
}
