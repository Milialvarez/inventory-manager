package org.inventory.inventorybackend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.inventory.inventorybackend.entities.CompositeElementType;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompositeElementDTO {

    @NotNull(message = "Personal ID is required")
    private Long personal_id;

    @NotBlank(message = "Element name is required")
    private String element_name;

    @NotNull(message = "Element type is required")
    private CompositeElementType element_type;

    // Valor propio (OPCIONAL, si no se envía se usa 0)
    @JsonProperty("own_value")
    private Double ownValue;

    // Valor total CALCULADO (OPCIONAL, solo para respuestas)
    @JsonProperty("total_value")
    private Double totalValue;

    private String description;

    private String location;

    // OPCIONAL - puede ser null o no enviarse
    private String notes;

    // OPCIONAL - puede ser null o no enviarse
    private List<SimpleElementDTO> elements_related;
}