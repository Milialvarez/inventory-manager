package org.inventory.inventorybackend.controllers;

import org.inventory.inventorybackend.dtos.SimpleElementDTO;
import org.inventory.inventorybackend.services.SimpleElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/simples")
public class SimpleElementController {

    @Autowired
    SimpleElementService simpleElementService;

    @GetMapping("/relatedto/{id}")
    public ResponseEntity<List<SimpleElementDTO>> getSimpleElements(@PathVariable Long id) {
        try{
            List<SimpleElementDTO> simpleElementsRelated = this.simpleElementService.getSimpleElementsRelated(id);
            if(simpleElementsRelated != null) {
                return ResponseEntity.ok(simpleElementsRelated);
            } else{
                return ResponseEntity.internalServerError().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
