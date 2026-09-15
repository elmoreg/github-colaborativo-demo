# Guía de contribución

Así trabajamos en este proyecto. La idea es que cualquier cambio pase por el
mismo camino, de forma ordenada y revisable.

## El ciclo, paso a paso

1. **Elige o crea un issue.** Todo trabajo nace de un issue que describe qué se
   quiere hacer y por qué.
2. **Crea una rama** a partir de `main`. Nunca trabajes directo sobre `main`.
3. **Haz commits pequeños y descriptivos** mientras avanzas.
4. **Sube la rama** (`git push`) y **abre un Pull Request (PR)** hacia `main`.
5. **Pide revisión.** Otra persona lee el PR, comenta y sugiere cambios.
6. **Aplica los cambios** solicitados con nuevos commits en la misma rama.
7. Cuando el PR está aprobado, se hace **merge** a `main` y se borra la rama.

## Nombres de rama

Usa un prefijo según el tipo de cambio:

- `feature/...` para funcionalidades nuevas — ej. `feature/agregar-tarea`
- `fix/...` para corrección de errores — ej. `fix/validar-tarea-vacia`
- `docs/...` para documentación — ej. `docs/actualizar-readme`

## Estilo de commits

Mensajes en imperativo y en español, cortos y claros:

```
Agrega formulario para crear tareas nuevas
Corrige validación de tareas vacías
```

## Enlazar el PR con su issue

En la descripción del PR escribe `Closes #N` (donde N es el número del issue).
Al hacer merge, GitHub cierra el issue automáticamente.
