package com.iCodeTest.iCodeTest.service;

import com.iCodeTest.iCodeTest.model.Org;

import java.util.List;
import java.util.Map;

public interface orgService {
    
    Org saveOrganizationData(Map<String, List<String>> data);

    //    List<Org> getAllOrganizationData();


}
