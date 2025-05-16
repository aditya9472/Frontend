// MainLayout component
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar, Footer, etc. */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
