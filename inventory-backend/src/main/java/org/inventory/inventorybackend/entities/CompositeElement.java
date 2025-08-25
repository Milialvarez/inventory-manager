package org.inventory.inventorybackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompositeElement {

    @Id
    @GeneratedValue()
    @Column(unique = true, nullable = false, name = "id_composite_element")
    private Long compositeElementId;

    @Column
    private String compositeElementName;

    @Column
    private String compositeElementDescription;

    @Column
    private String compositeElementType;

    @OneToMany
    @Column
    private List<SimpleElement> simple_elements;
}
