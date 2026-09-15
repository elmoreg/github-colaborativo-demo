"use client";

import { useState } from "react";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender a crear ramas en Git", hecha: false },
    { id: 2, texto: "Abrir mi primer Pull Request", hecha: false },
  ]);

  function agregarTarea(texto) {
    const nueva = { id: Date.now(), texto, hecha: false };
    setTareas((prev) => [...prev, nueva]);
  }

  function alternarTarea(id) {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t))
    );
  }

  const pendientes = tareas.filter((t) => !t.hecha).length;

  return (
    <main className="contenedor">
      <header className="header">
        <h1>Mis Tareas</h1>
        <span className="contador">{pendientes} pendientes</span>
      </header>

      <TaskForm onAgregar={agregarTarea} />

      <ul className="lista">
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            className={tarea.hecha ? "item hecha" : "item"}
            onClick={() => alternarTarea(tarea.id)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </main>
  );
}
