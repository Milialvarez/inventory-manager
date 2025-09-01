package org.inventory.inventorybackend.repositories;

import org.inventory.inventorybackend.entities.CompositeElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompositeElementRepository extends JpaRepository<CompositeElement, Long> {

    List<CompositeElement> findByNameContainingIgnoreCase(String name);

    @Query("SELECT c FROM CompositeElement c LEFT JOIN FETCH c.relatedElements er LEFT JOIN FETCH er.simpleElement se")
    List<CompositeElement> findAllWithTotalValue();
}
