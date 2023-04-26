package com.example.usermetadata.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.usermetadata.Entity.UserMetaData;


public interface UsersRepo extends JpaRepository<UserMetaData, Long>{

}
