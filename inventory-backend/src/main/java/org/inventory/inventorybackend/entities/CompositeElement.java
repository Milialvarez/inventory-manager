package org.inventory.inventorybackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Table(name = "composite_element")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class CompositeElement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "personal_id", nullable = false, unique = true)
    private Long personalId;

    @Column(nullable = false)
    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CompositeElementType type;

    private String location;

    private String notes;

    @OneToMany(mappedBy = "compositeElement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ElementRelation> relatedElements;
}