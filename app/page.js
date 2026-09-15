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

  return (
    <main className="contenedor">
      <header className="header">
        <h1>Mis Tareas</h1>
      </header>

      <TaskForm onAgregar={agregarTarea} />

      <ul className="lista">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="item">
            {tarea.texto}
          </li>
        ))}
      </ul>
    </main>
  );
}
