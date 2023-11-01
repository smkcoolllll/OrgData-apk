package com.iCodeTest.iCodeTest.service.serviceImpl;

import com.iCodeTest.iCodeTest.model.Org;
import com.iCodeTest.iCodeTest.repository.orgRepo;
import com.iCodeTest.iCodeTest.service.orgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class orgServiceImpl implements orgService {
    @Autowired
    private orgRepo orgrepo;
    @Override
    public Org saveOrganizationData(Map<String, List<String>> data) {
        Org organization=new Org();
        organization.setOrgData(data);
        return orgrepo.save(organization);
    }

//    @Override
//    public List<Org> getAllOrganizationData() {
//        return orgrepo.findAll();
//    }
}
