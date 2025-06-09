import Footer from "@/components/Footer";
import NavbarClient from "@/components/Navbar/NavbarClient";

export default async function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarClient className="py-12 px-8" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
