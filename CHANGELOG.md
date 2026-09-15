# Changelog

Todos los cambios relevantes del proyecto se documentan en este archivo.
El formato sigue la idea de [Keep a Changelog](https://keepachangelog.com/es/)
y el proyecto usa [versionado semántico](https://semver.org/lang/es/).

## [1.0.0] - 2026-09-15

Primera versión funcional de la app de tareas.

### Agregado

- Estructura inicial del proyecto en Next.js/React (#0).
- Formulario para crear tareas nuevas (#1, PR #7).
- Posibilidad de marcar tareas como completadas, con estilo tachado (#2, PR #8).
- Contador de tareas pendientes en el encabezado (#3, PR #10).
- Filtros por estado: todas / pendientes / completadas (#4, PR #11).

### Corregido

- Ya no se pueden agregar tareas vacías (#5, PR #9).

### Notas

- El PR #11 (filtros) requirió resolver un conflicto de merge con el PR #10
  (contador), porque ambos editaban el mismo encabezado. La resolución quedó
  registrada en el historial del PR.
