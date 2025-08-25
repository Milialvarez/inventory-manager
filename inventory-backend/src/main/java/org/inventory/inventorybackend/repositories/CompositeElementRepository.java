package org.inventory.inventorybackend.repositories;

import org.inventory.inventorybackend.entities.CompositeElement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompositeElementRepository extends JpaRepository<CompositeElement, Long> {
    List<CompositeElement> findByNameContainingIgnoreCase(String name);
    List<CompositeElement> findByQuantityBetween(Integer min, Integer max);
}