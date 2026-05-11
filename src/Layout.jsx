import "./globals.css"

export const metadata = {
  title: "GetStitched - Premium Custom Tailoring & Alterations",
  description:
    "Experience world-class tailoring services. Book appointments, track orders, and connect with expert tailors.",
  themeColor: "#05060A",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060A",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
