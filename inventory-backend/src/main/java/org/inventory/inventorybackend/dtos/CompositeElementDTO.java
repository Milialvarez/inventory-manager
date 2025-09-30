package org.inventory.inventorybackend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
    @JsonProperty("element_type")
    @Enumerated(EnumType.STRING)
    private CompositeElementType element_type;

    @JsonProperty("own_value")
    private Double ownValue;

    @JsonProperty("total_value")
    private Double totalValue;

    private String description;

    private String location;

    private String notes;

    private List<SimpleElementDTO> elements_related;
}