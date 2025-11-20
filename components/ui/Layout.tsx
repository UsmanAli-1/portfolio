import Header from "@/components/ui/Header"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />          {/* This will appear on every page */}
      <main>{children}</main>  {/* Page-specific content goes here */}
    </div>
  )
}
