package org.inventory.inventorybackend.entities;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum CompositeElementType {
    PC,
    MONITOR,
    MOUSE,
    KEYBOARD,
    HEADPHONES,
    CAMERAS,
    OTHERS;

    @JsonCreator
    public static CompositeElementType fromString(String value) {
        return CompositeElementType.valueOf(value.toUpperCase());
    }
}
