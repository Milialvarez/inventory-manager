package org.inventory.inventorybackend.controllers;

import org.inventory.inventorybackend.dtos.CompositeElementDTO;
import org.inventory.inventorybackend.services.CompositeElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/composite-elements")
@CrossOrigin(origins = "*")
public class CompositeElementController {

    @Autowired
    private CompositeElementService compositeElementService;

    /**
     * Obtiene todos los CompositeElement
     * @return ResponseEntity con lista de CompositeElementDTO
     */
    @GetMapping
    public ResponseEntity<List<CompositeElementDTO>> getAllCompositeElements() {
        try {
            List<CompositeElementDTO> compositeElements = compositeElementService.findAll();

            if (compositeElements.isEmpty()) {
                return ResponseEntity.noContent().build(); // 204 No Content
            }

            return ResponseEntity.ok(compositeElements); // 200 OK

        } catch (Exception e) {
            System.err.println("Error al obtener composite elements: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 500
        }
    }

    // Ejemplo de otros endpoints que podrías necesitar:

    /**
     * Obtiene un CompositeElement por ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<CompositeElementDTO> getCompositeElementById(@PathVariable Long id) {
        try {
            CompositeElementDTO compositeElement = compositeElementService.findById(id);

            if (compositeElement != null) {
                return ResponseEntity.ok(compositeElement); // 200 OK
            } else {
                return ResponseEntity.notFound().build(); // 404 Not Found
            }

        } catch (Exception e) {
            System.err.println("Error al obtener composite element con ID " + id + ": " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 500
        }
    }

    /**
     * Crea un nuevo CompositeElement
     */
    @PostMapping
    public ResponseEntity<CompositeElementDTO> createCompositeElement(@RequestBody CompositeElementDTO compositeElementDTO) {
        try {
            CompositeElementDTO createdElement = compositeElementService.save(compositeElementDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdElement); // 201 Created

        } catch (Exception e) {
            System.err.println("Error al crear composite element: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); // 400 Bad Request
        }
    }

    /**
     * Actualiza un CompositeElement existente
     */
    @PutMapping("/{id}")
    public ResponseEntity<CompositeElementDTO> updateCompositeElement(
            @PathVariable Long id,
            @RequestBody CompositeElementDTO compositeElementDTO) {
        try {
            CompositeElementDTO updatedElement = compositeElementService.update(id, compositeElementDTO);

            if (updatedElement != null) {
                return ResponseEntity.ok(updatedElement); // 200 OK
            } else {
                return ResponseEntity.notFound().build(); // 404 Not Found
            }

        } catch (Exception e) {
            System.err.println("Error al actualizar composite element con ID " + id + ": " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); // 400 Bad Request
        }
    }

    /**
     * Elimina un CompositeElement
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCompositeElement(@PathVariable Long id) {
        try {
            boolean deleted = compositeElementService.deleteById(id);

            if (deleted) {
                return ResponseEntity.noContent().build(); // 204 No Content
            } else {
                return ResponseEntity.notFound().build(); // 404 Not Found
            }

        } catch (Exception e) {
            System.err.println("Error al eliminar composite element con ID " + id + ": " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 500
        }
    }
}