package org.inventory.inventorybackend.services;

import org.inventory.inventorybackend.dtos.CompositeElementDTO;
import org.inventory.inventorybackend.dtos.SimpleElementDTO;
import org.inventory.inventorybackend.entities.CompositeElement;
import org.inventory.inventorybackend.repositories.CompositeElementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional // Maneja las transacciones automáticamente
public class CompositeElementService {

    @Autowired
    private CompositeElementRepository compositeElementRepository;

    /**
     * Obtiene todos los CompositeElement y los convierte a DTO
     * @return Lista de CompositeElementDTO
     */
    @Transactional(readOnly = true) // Para operaciones de solo lectura
    public List<CompositeElementDTO> findAll() {
        List<CompositeElement> entities = compositeElementRepository.findAll();

        return entities.stream()
                .map(this::convertToDTO) // Convertimos cada entidad a DTO
                .collect(Collectors.toList());
    }

    /**
     * Obtiene un CompositeElement por ID
     * @param id ID del elemento a buscar
     * @return CompositeElementDTO o null si no existe
     */
    @Transactional(readOnly = true)
    public CompositeElementDTO findById(Long id) {
        Optional<CompositeElement> entityOptional = compositeElementRepository.findById(id);

        return entityOptional
                .map(this::convertToDTO) // Si existe, lo convertimos a DTO
                .orElse(null); // Si no existe, retornamos null
    }

    /**
     * Crea un nuevo CompositeElement
     * @param compositeElementDTO DTO con los datos del nuevo elemento
     * @return CompositeElementDTO del elemento creado
     */
    public CompositeElementDTO save(CompositeElementDTO compositeElementDTO) {
        // Convertimos DTO a entidad
        CompositeElement entity = convertToEntity(compositeElementDTO);

        // Guardamos en la base de datos
        CompositeElement savedEntity = compositeElementRepository.save(entity);

        // Retornamos como DTO
        return convertToDTO(savedEntity);
    }

    /**
     * Actualiza un CompositeElement existente
     * @param id ID del elemento a actualizar
     * @param compositeElementDTO DTO con los nuevos datos
     * @return CompositeElementDTO actualizado o null si no existe
     */
    public CompositeElementDTO update(Long id, CompositeElementDTO compositeElementDTO) {
        Optional<CompositeElement> existingEntityOptional = compositeElementRepository.findById(id);

        if (existingEntityOptional.isPresent()) {
            CompositeElement existingEntity = existingEntityOptional.get();

            // Actualizamos los campos (mapeo manual)
            updateEntityFromDTO(existingEntity, compositeElementDTO);

            // Guardamos los cambios
            CompositeElement updatedEntity = compositeElementRepository.save(existingEntity);

            return convertToDTO(updatedEntity);
        }

        return null; // No se encontró el elemento
    }

    /**
     * Elimina un CompositeElement por ID
     * @param id ID del elemento a eliminar
     * @return true si se eliminó, false si no existía
     */
    public boolean deleteById(Long id) {
        if (compositeElementRepository.existsById(id)) {
            compositeElementRepository.deleteById(id);
            return true;
        }
        return false;
    }

    /**
     * Verifica si existe un CompositeElement con el ID dado
     * @param id ID a verificar
     * @return true si existe, false si no
     */
    @Transactional(readOnly = true)
    public boolean existsById(Long id) {
        return compositeElementRepository.existsById(id);
    }

    /**
     * Obtiene el count total de elementos
     * @return número total de CompositeElement
     */
    @Transactional(readOnly = true)
    public long count() {
        return compositeElementRepository.count();
    }

    // ============= MÉTODOS DE CONVERSIÓN =============

    /**
     * Convierte una entidad CompositeElement a CompositeElementDTO
     * @param entity Entidad a convertir
     * @return DTO correspondiente
     */
    private CompositeElementDTO convertToDTO(CompositeElement entity) {
        CompositeElementDTO dto = new CompositeElementDTO();

        dto.setPersonal_id(Long.valueOf(entity.getPersonalId()));
        dto.setElement_name(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setLocation(entity.getLocation());
        dto.setNotes(entity.getNotes());
        dto.setElement_type(entity.getType());

        List<SimpleElementDTO> elements_related = this.getElementsRelated(entity.getId());
        dto.setElements_related(elements_related);
        Double total_value = this.getTotalValue(entity.getId());

        return dto;
    }

    private Double getTotalValue(Long id) {
        return 0.0;
    }

    private List<SimpleElementDTO> getElementsRelated(Long id) {
        return List.of();
    }

    private CompositeElement convertToEntity(CompositeElementDTO dto) {
        CompositeElement entity = new CompositeElement();

        // No seteamos el ID para creación (se autogenera)
        entity.setName(dto.getElement_name());
        entity.setDescription(dto.getDescription());
        entity.setLocation(dto.getLocation());
        entity.setPersonalId(dto.getPersonal_id());


        return entity;
    }

    /**
     * Actualiza los campos de una entidad existente con los datos del DTO
     * @param entity Entidad existente a actualizar
     * @param dto DTO con los nuevos datos
     */
    private void updateEntityFromDTO(CompositeElement entity, CompositeElementDTO dto) {
        // Actualizamos solo los campos que pueden cambiar
        entity.setName(dto.getElement_name());
        entity.setDescription(dto.getDescription());
        entity.setLocation(dto.getLocation());
        entity.setPersonalId(dto.getPersonal_id());

    }

    /**
     * Ejemplo: Buscar por nombre (contains - case insensitive)
     */
    @Transactional(readOnly = true)
    public List<CompositeElementDTO> findByNameContaining(String name) {
        List<CompositeElement> entities = compositeElementRepository.findByNameContainingIgnoreCase(name);

        return entities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Ejemplo: Buscar por rango de cantidad
     */
    @Transactional(readOnly = true)
    public List<CompositeElementDTO> findByQuantityBetween(Integer minQuantity, Integer maxQuantity) {
        List<CompositeElement> entities = compositeElementRepository.findByQuantityBetween(minQuantity, maxQuantity);

        return entities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
}