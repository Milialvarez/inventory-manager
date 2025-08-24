FROM openjdk:21-jdk-slim

WORKDIR /app

COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
COPY src ./src

RUN chmod +x ./mvnw

# Compilar con logs detallados
RUN ./mvnw clean package -DskipTests -e -X

# Listar contenido de target para ver si se generó el JAR
RUN echo "=== Contenido de target/ ===" && ls -la target/

EXPOSE 8080

CMD ["java", "-jar", "target/inventory-backend-0.0.1-SNAPSHOT.jar"]