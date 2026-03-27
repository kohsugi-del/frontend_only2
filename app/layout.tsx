// app/layout.tsx
import "./globals.css";
import ClientWidgets from "./ClientWidgets";

export const metadata = {
  title: "Chatbot",
  description: "RAG Chatbot",
};

const widgethtml: React.CSSProperties = {
  width: "fit-content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" style={widgethtml}>
      <body suppressHydrationWarning>
        {children}
        <ClientWidgets />
      </body>
    </html>
  );
}