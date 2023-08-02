export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-back-default">{children}</body>
    </html>
  );
}
