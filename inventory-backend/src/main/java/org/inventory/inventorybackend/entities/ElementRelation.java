package org.inventory.inventorybackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "elements_related")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ElementRelation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "composite_element_id", nullable = false)
    private CompositeElement compositeElement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "simple_element_id", nullable = false)
    private SimpleElement simpleElement;

    @Column(nullable = false)
    private Integer amount;
}