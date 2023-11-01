package com.iCodeTest.iCodeTest.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "ICodeTest-orgDB")
public class Org {
    @Id
    private String id;
//    private Map<String, String> orgData;
    private Map<String, List<String>> orgData;
}
