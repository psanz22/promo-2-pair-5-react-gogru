1. **Inicializar el Estado**: Define el estado inicial del juego, incluyendo la posición inicial de Grogu, el conjunto de mercancías, y el resultado inicial del dado.

2. **Lanzar el Dado**: Implementa una función para simular el lanzamiento del dado. Esta función generará un número aleatorio entre 1 y 4, y actualizará el estado del resultado del dado.

3. **Mover a Grogu**: Basándote en el resultado del dado, actualiza la posición de Grogu en el tablero. Si Grogu alcanza el final del tablero (el armario), el juego termina y el jugador pierde.

4. **Descargar Mercancías**: Cada vez que se lance el dado y no resulte en que Grogu avance hacia el armario, el jugador tiene la oportunidad de "descargar" una mercancía. Actualiza el estado de las mercancías restantes.

5. **Verificar el Fin del Juego**: Después de cada turno, verifica si todas las mercancías han sido descargadas. Si es así, el jugador gana. Si Grogu llega al armario antes de que se descarguen todas las mercancías, el jugador pierde.

6. **Reiniciar el Juego**: Proporciona una manera de reiniciar el juego a su estado inicial.

7. **Interfaz de Usuario**: Asegúrate de que la interfaz de usuario refleje el estado actual del juego, mostrando la posición de Grogu, las mercancías restantes, y el resultado del dado.
