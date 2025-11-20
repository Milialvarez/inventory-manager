package org.inventory.inventorybackend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.inventory.inventorybackend.entities.SimpleElementType;

@Data
@AllArgsConstructor
public class SimpleElementDTO {

    private Long id;
    private String name;
    private SimpleElementType type;
    private double unit_value;
    private int amount;
}
