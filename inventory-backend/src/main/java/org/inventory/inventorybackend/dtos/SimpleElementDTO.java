package org.inventory.inventorybackend.dtos;

import lombok.Data;
import org.inventory.inventorybackend.entities.SimpleElementType;

@Data
public class SimpleElementDTO {

    private int id;
    private String name;
    private SimpleElementType type;
    private double unit_value;
    private int amount;
}
