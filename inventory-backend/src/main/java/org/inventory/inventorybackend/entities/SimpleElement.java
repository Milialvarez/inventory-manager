package org.inventory.inventorybackend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SimpleElement {

    @Id
    @GeneratedValue
    @Column(nullable = false, name = "id_simple_element")
    private int simpleElementId;

    @Column
    private String simpleElementName;

    @Column
    private String simpleElementDescription;

    @Column
    private Double simpleElementPrice;
}
