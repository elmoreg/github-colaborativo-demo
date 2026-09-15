"use client";

import { useState } from "react";

export default function TaskForm({ onAgregar }) {
  const [texto, setTexto] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    const limpio = texto.trim();
    if (limpio === "") {
      return; // no se agregan tareas vacias
    }
    onAgregar(limpio);
    setTexto("");
  }

  return (
    <form className="form" onSubmit={manejarEnvio}>
      <input
        className="form-input"
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button className="form-boton" type="submit">
        Agregar
      </button>
    </form>
  );
}
