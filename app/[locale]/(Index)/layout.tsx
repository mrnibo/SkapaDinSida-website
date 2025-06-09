import Footer from "@/components/Footer";
import NavbarClient from "@/components/Navbar/NavbarClient";

export default async function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
