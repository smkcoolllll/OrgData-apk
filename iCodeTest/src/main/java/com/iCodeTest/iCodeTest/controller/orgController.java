package com.iCodeTest.iCodeTest.controller;

import com.iCodeTest.iCodeTest.model.Org;
import com.iCodeTest.iCodeTest.service.orgService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/iCodeTest")
public class orgController {

    @Autowired
    private orgService orgsrv;

    // This method handles the HTTP POST request to save organization data.

    @PostMapping("/save")
    public ResponseEntity<String> saveData(@RequestBody Map<String, List<String>> data) {
        try {
            Org savedData = orgsrv.saveOrganizationData(data);
            return ResponseEntity.ok("Data saved with ID: " + savedData.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving data: " + e.getMessage());
        }
    }

    // @GetMapping("/download")
    // public ResponseEntity<Resource> downloadDataAsCsv() {
    // try {
    // List<Org> organizationData = orgsrv.getAllOrganizationData();
    // StringWriter writer = new StringWriter();
    //
    // if (!organizationData.isEmpty()) {
    // // Extract the headers dynamically from the first record
    // Org firstRecord = organizationData.get(0);
    // Set<String> headers = firstRecord.getOrgData().keySet();
    //
    // // Create a CSV printer with custom CSVFormat
    // CSVFormat csvFormat = CSVFormat.DEFAULT.withHeader(headers.toArray(new
    // String[0]));
    // try (CSVPrinter csvPrinter = new CSVPrinter(writer, csvFormat)) {
    // for (Org org : organizationData) {
    // csvPrinter.printRecord(org.getOrgData().values());
    // }
    // }
    // }
    //
    // // Set the CSV content as a downloadable file
    // ByteArrayResource csvFile = new
    // ByteArrayResource(writer.toString().getBytes());
    //
    // HttpHeaders headers = new HttpHeaders();
    // headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment;
    // filename=data.csv");
    //
    // return ResponseEntity.ok()
    // .headers(headers)
    // .contentType(MediaType.parseMediaType("text/csv"))
    // .body((Resource) csvFile);
    // } catch (IOException e) {
    // // Handle any exceptions, e.g., log the error
    // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    // }
    // }

}
