# Guía del flujo colaborativo en GitHub

Esta guía recorre, paso a paso, el trabajo colaborativo que quedó registrado en
este repositorio. No es teoría suelta: cada concepto apunta a algo real que
puedes abrir y mirar en `github.com/elmoreg/github-colaborativo-demo`.

La app (una lista de tareas en Next.js/React) es lo de menos. Lo que importa es
**cómo se construyó**: en pedazos pequeños, cada uno con su issue, su rama, su
Pull Request y su revisión.

---

## 1. El mapa mental

En un proyecto con GitHub conviven dos planos:

**Git** (la herramienta de control de versiones, vive en tu máquina y en el
servidor):

- **Repositorio**: la carpeta del proyecto más todo su historial.
- **Commit**: una foto del proyecto en un momento, con un mensaje que explica el
  cambio. Es la unidad mínima del historial.
- **Rama (branch)**: una línea de trabajo paralela. `main` es la rama principal
  (el código "oficial"). Las ramas de trabajo salen de `main` y luego vuelven.
- **Merge**: fusionar una rama dentro de otra.
- **Conflicto**: cuando dos ramas cambian las mismas líneas y Git no puede
  decidir cuál gana; lo resuelve una persona.

**GitHub** (el servicio en la nube que hospeda el repo y agrega colaboración):

- **Issue**: una tarjeta que describe algo por hacer (funcionalidad, bug, idea).
- **Pull Request (PR)**: una propuesta de fusionar una rama a `main`. Es donde
  ocurre la conversación, la revisión de código y, al final, el merge.
- **Code review**: comentarios sobre el PR antes de aceptarlo.
- **Label / Milestone**: etiquetas y agrupaciones para organizar issues y PRs.

La regla de oro del trabajo colaborativo: **nadie escribe directo en `main`**.
Todo cambio entra por una rama y un Pull Request revisable.

---

## 2. El ciclo, una y otra vez

Cada cambio de este repo siguió el mismo camino:

1. Hay un **issue** que describe qué hacer.
2. Se crea una **rama** desde `main` (`git checkout -b feature/...`).
3. Se hacen **commits** pequeños con el cambio.
4. Se **sube** la rama (`git push`) y se abre un **Pull Request**.
5. Alguien **revisa** el PR y comenta.
6. Se **aplican** los ajustes pedidos (más commits).
7. Se hace **merge** a `main` y se borra la rama.

Al hacer merge de un PR cuya descripción decía `Closes #N`, GitHub cierra ese
issue automáticamente. Por eso los issues #1 a #5 aparecen cerrados: los cerró
el merge de su PR.

---

## 3. Recorrido por lo que quedó en el repo

### Issues (la pestaña "Issues")

Se crearon como en un proyecto real, antes de escribir código:

- #1 Agregar formulario para crear tareas
- #2 Permitir marcar tareas como completadas
- #3 Mostrar contador de tareas pendientes
- #4 Agregar filtros: todas / pendientes / completadas
- #5 Se pueden agregar tareas vacías (bug)
- #6 Documentar el changelog del proyecto

Fíjate en las **labels** (`enhancement`, `bug`, `frontend`, `good first issue`,
`documentation`) y en el **milestone** "v1.0", que agrupa lo necesario para la
primera versión.

### Pull Requests (la pestaña "Pull Requests → Closed")

Cada PR es una historia corta. Ábrelos y lee la conversación:

- **PR #7 — Formulario para crear tareas** (cierra #1). Un ciclo limpio: rama,
  commit, PR, un comentario de revisión y merge.
- **PR #8 — Marcar tareas como completadas** (cierra #2). El más interesante para
  aprender revisión: el primer commit sólo cambiaba la lógica, sin nada visible.
  La revisión pidió el estilo tachado; un **segundo commit** lo agregó y recién
  ahí se aprobó. Verás los dos commits y los dos comentarios en el mismo PR.
- **PR #9 — Corrige tareas vacías** (cierra #5). Un bugfix chico en su propia
  rama `fix/...`.
- **PR #10 — Contador de pendientes** (cierra #3). Editaba el encabezado.
- **PR #11 — Filtros por estado** (cierra #4). Editaba **el mismo encabezado**
  que el #10. Aquí ocurrió el conflicto (siguiente sección).

### Historial (la pestaña "commits" o `git log`)

Verás los commits de trabajo y, entre ellos, los **merge commits**
("Merge pull request #N..."). Ese patrón —commits de una rama, luego un merge
commit— es la huella visual de que se trabajo con ramas y PRs, no empujando
directo a `main`.

---

## 4. El conflicto de merge, en detalle

Es la parte que más cuesta al principio, así que se provocó a propósito:

1. Los PR #10 (contador) y #11 (filtros) salieron **los dos desde el mismo
   `main`**, y **los dos** agregaban algo justo después del `<h1>Mis Tareas</h1>`
   en `app/page.js`.
2. Se mergeó primero el **#10**. Con eso, `main` cambió esa zona del archivo.
3. Al intentar poner la rama de **#11** al día con `main` (`git merge main`), Git
   encontró que las dos versiones tocaban las mismas líneas y no supo cuál elegir:

   ```
   CONFLICT (content): Merge conflict in app/page.js
   ```

4. Git dejó marcas en el archivo así:

   ```
   <<<<<<< HEAD
   (lo que trae la rama de filtros)
   =======
   (lo que ya estaba en main: el contador)
   >>>>>>> main
   ```

5. **Resolver** significa editar el archivo para dejar la version final correcta
   —en este caso, conservar el contador **y** los filtros— y borrar las marcas.
   Luego `git add` del archivo y un commit que cierra el merge. Ese commit es
   "Resuelve conflicto en page.js: integra contador y filtros".

La lección clave: un conflicto no es un error ni algo roto. Es Git pidiéndote una
decisión que sólo una persona puede tomar. Resolverlo es leer las dos versiones y
escribir la que tiene sentido.

---

## 5. Una limitación honesta de esta demo

En un equipo real, el paso de **aprobar** un PR ("Approve") lo hace **otra
persona**, distinta de quien lo escribió. GitHub no te deja aprobar formalmente
tu propio Pull Request.

Como este repo se construyó todo con una sola cuenta (la tuya), no verás el sello
verde de "Approved": verás **comentarios de revisión** que hacen las veces de esa
conversación. Cuando trabajes con alguien más, ese es justo el punto donde entra
tu compañero: lee tu PR, comenta, y si está de acuerdo pulsa "Approve" antes del
merge. Todo lo demás del flujo es idéntico.

---

## 6. Cómo replicar el ciclo tú mismo

### Opción A — desde la terminal (git + gh)

```bash
# 1. Traer el repo a tu máquina (si no lo tienes)
git clone https://github.com/elmoreg/github-colaborativo-demo
cd github-colaborativo-demo

# 2. Partir de main actualizado y crear una rama
git checkout main
git pull
git checkout -b feature/mi-cambio

# 3. Editar archivos, luego registrar el cambio
git add .
git commit -m "Describe tu cambio en imperativo"

# 4. Subir la rama y abrir el Pull Request
git push -u origin feature/mi-cambio
gh pr create --base main --fill

# 5. Cuando esté revisado, mergear y limpiar
gh pr merge --merge --delete-branch
```

### Opción B — desde la web (sin instalar nada)

1. En el repo, botón **Add file → Create new file** (o editar uno con el lápiz).
2. Arriba, en lugar de guardar en `main`, elige **"Create a new branch and start
   a pull request"**.
3. GitHub te lleva directo a crear el **Pull Request**.
4. En la pestaña **Pull Requests**, otra persona (o tú) comenta y luego
   **Merge pull request**.

Para practicar el conflicto: crea dos ramas que editen la misma línea de un
archivo, mergea una, y al abrir el PR de la otra GitHub te mostrará el conflicto
y un editor web para resolverlo.

---

## 7. Glosario rápido

| Término | Qué es |
|---|---|
| `main` | La rama principal, el código oficial. |
| rama / branch | Línea de trabajo paralela que sale de `main`. |
| commit | Una foto del proyecto con su mensaje. |
| push | Subir tus commits al servidor (GitHub). |
| pull | Traer al repo local lo último del servidor. |
| Pull Request | Propuesta de fusionar una rama a `main`, revisable. |
| review | Comentarios sobre un PR antes de aceptarlo. |
| merge | Fusionar una rama dentro de otra. |
| conflicto | Cambios incompatibles en las mismas líneas; los resuelve una persona. |
| issue | Tarjeta que describe algo por hacer. |
| `Closes #N` | En un PR, cierra el issue N al hacer merge. |

---

*Este repositorio y esta guía se generaron como material de enseñanza. Explóralo
sin miedo: es tuyo y es un espacio seguro para experimentar.*
