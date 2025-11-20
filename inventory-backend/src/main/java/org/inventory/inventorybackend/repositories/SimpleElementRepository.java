package org.inventory.inventorybackend.repositories;

import org.inventory.inventorybackend.entities.CompositeElement;
import org.inventory.inventorybackend.entities.SimpleElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SimpleElementRepository extends JpaRepository<SimpleElement, Long> {

    @Query("""
        SELECT er.simpleElement
        FROM ElementRelation er
        WHERE er.compositeElement.id = :compositeId
    """)
    List<SimpleElement> findByCompositeId(@Param("compositeId") Long compositeId);
}

