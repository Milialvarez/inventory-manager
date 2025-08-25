package org.inventory.inventorybackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Table(name = "simple_elements")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SimpleElement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SimpleElementType type;

    @Column(name = "unit_value", nullable = false)
    private Double unitValue;

    @OneToMany(mappedBy = "simpleElement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ElementRelation> relatedComposites;
}
