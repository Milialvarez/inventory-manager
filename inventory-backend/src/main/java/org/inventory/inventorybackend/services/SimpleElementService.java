package org.inventory.inventorybackend.services;

import org.inventory.inventorybackend.dtos.SimpleElementDTO;
import org.inventory.inventorybackend.entities.SimpleElement;
import org.inventory.inventorybackend.repositories.SimpleElementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SimpleElementService {

    @Autowired
    private SimpleElementRepository simpleElementRepository;


    public List<SimpleElementDTO> getSimpleElementsRelated(Long id) {
        List<SimpleElement> simpleElementDTOs = this.simpleElementRepository.findByCompositeId(id);
    }
}
