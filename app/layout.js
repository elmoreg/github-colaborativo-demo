import "./globals.css";

export const metadata = {
  title: "Mis Tareas",
  description: "Mini app de tareas — demo de colaboracion en GitHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
