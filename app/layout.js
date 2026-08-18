import "./globals.css";

export const metadata = {
  title: "Bamse | NoJuo Corporation",
  description: "Bamse — the AI assistant by NoJuo Corporation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
