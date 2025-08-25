package org.inventory.inventorybackend.dtos;

import org.inventory.inventorybackend.entities.CompositeElementType;

import java.util.List;

public class CompositeElementDTO {
    private Long personal_id;
    private String element_name;
    private CompositeElementType element_type;
    private Double total_value;
    private String description;
    private String location;
    private String notes;
    private List<SimpleElementDTO> elements_related;
}
