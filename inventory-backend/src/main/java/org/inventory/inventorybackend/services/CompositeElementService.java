package org.inventory.inventorybackend.services;

import org.inventory.inventorybackend.dtos.CompositeElementDTO;
import org.inventory.inventorybackend.dtos.SimpleElementDTO;
import org.inventory.inventorybackend.entities.CompositeElement;
import org.inventory.inventorybackend.entities.CompositeElementType;
import org.inventory.inventorybackend.entities.SimpleElementType;
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

    @Transactional(readOnly = true)
    public List<CompositeElementDTO> findAll() {
        List<CompositeElement> entities = compositeElementRepository.findAll();
        System.out.println("Cantidad de entidades encontradas: " + entities.size());


        return entities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CompositeElementDTO findById(Long id) {
        Optional<CompositeElement> entityOptional = compositeElementRepository.findById(id);

        return entityOptional
                .map(this::convertToDTO) // Si existe, lo convertimos a DTO
                .orElse(null); // Si no existe, retornamos null
    }

    public CompositeElementDTO save(CompositeElementDTO compositeElementDTO) {
        // Convertimos DTO a entidad
        CompositeElement entity = convertToEntity(compositeElementDTO);

        // Guardamos en la base de datos
        CompositeElement savedEntity = compositeElementRepository.save(entity);

        // Retornamos como DTO
        return convertToDTO(savedEntity);
    }

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


    public boolean deleteById(Long id) {
        if (compositeElementRepository.existsById(id)) {
            compositeElementRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional(readOnly = true)
    public boolean existsById(Long id) {
        return compositeElementRepository.existsById(id);
    }

    @Transactional(readOnly = true)
    public long count() {
        return compositeElementRepository.count();
    }

    private CompositeElementDTO convertToDTO(CompositeElement entity) {
        CompositeElementDTO dto = new CompositeElementDTO();

        dto.setPersonal_id(entity.getPersonalId());
        dto.setElement_name(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setLocation(entity.getLocation());
        dto.setNotes(entity.getNotes());
        dto.setOwnValue(entity.getOwnValue());
        dto.setElement_type(CompositeElementType.valueOf(String.valueOf(entity.getType())));

        // Mapeo de elementos relacionados a SimpleElementDTO
        List<SimpleElementDTO> elements_related = entity.getRelatedElements().stream()
                .map(er -> {
                    SimpleElementDTO simpleDTO = new SimpleElementDTO();
                    simpleDTO.setId(Math.toIntExact(er.getSimpleElement().getId()));
                    simpleDTO.setName(er.getSimpleElement().getName());
                    simpleDTO.setType(SimpleElementType.valueOf(String.valueOf(er.getSimpleElement().getType())));
                    simpleDTO.setUnit_value(er.getSimpleElement().getUnitValue());
                    simpleDTO.setAmount(er.getAmount());
                    return simpleDTO;
                })
                .toList();

        dto.setElements_related(elements_related);

        // Cálculo del total_value sumando unitValue * amount
        double totalValue = elements_related.stream()
                .mapToDouble(e -> e.getUnit_value() * e.getAmount())
                .sum();

        dto.setTotalValue(totalValue + dto.getOwnValue());

        return dto;
    }



    private List<SimpleElementDTO> getElementsRelated(Long id) {
        return List.of();
    }

    private CompositeElement convertToEntity(CompositeElementDTO dto) {
        CompositeElement entity = new CompositeElement();

        entity.setName(dto.getElement_name());
        entity.setDescription(dto.getDescription());
        entity.setLocation(dto.getLocation());
        entity.setPersonalId(dto.getPersonal_id());

        return entity;
    }

    private void updateEntityFromDTO(CompositeElement entity, CompositeElementDTO dto) {
        // Actualizamos solo los campos que pueden cambiar
        entity.setName(dto.getElement_name());
        entity.setDescription(dto.getDescription());
        entity.setLocation(dto.getLocation());
        entity.setPersonalId(dto.getPersonal_id());

    }

    @Transactional(readOnly = true)
    public List<CompositeElementDTO> findByNameContaining(String name) {
        List<CompositeElement> entities = compositeElementRepository.findByNameContainingIgnoreCase(name);

        return entities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

}