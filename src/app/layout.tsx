export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Página Personal</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
