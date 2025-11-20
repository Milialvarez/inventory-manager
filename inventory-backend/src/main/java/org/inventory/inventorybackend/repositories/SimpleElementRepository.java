package org.inventory.inventorybackend.repositories;

import org.inventory.inventorybackend.dtos.SimpleElementDTO;
import org.inventory.inventorybackend.entities.CompositeElement;
import org.inventory.inventorybackend.entities.SimpleElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SimpleElementRepository extends JpaRepository<SimpleElement, Long> {

    @Query("""
    SELECT new org.inventory.inventorybackend.dto.SimpleElementWithAmountDTO(
        se.id,
        se.name,
        se.type,
        se.unitValue,
        er.amount
    )
    FROM ElementRelation er
    JOIN er.simpleElement se
    WHERE er.compositeElement.id = :compositeId
""")
    List<SimpleElementDTO> findSimpleElementsByCompositeId(@Param("compositeId") Long compositeId);

}

