package com.iCodeTest.iCodeTest.repository;

import com.iCodeTest.iCodeTest.model.Org;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface orgRepo extends MongoRepository <Org,String>{
}
