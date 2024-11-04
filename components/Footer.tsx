"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import NavbarLogo from "./Navbar/NavbarLogo";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-neutral-950 text-gray-300 py-4 border-t border-neutral-800 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <Link href="/">
              <NavbarLogo isWithLogo={false} />
            </Link>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: t("copyright") }}
            ></p>
          </div>
          <Link
            href="/integritetspolicy"
            className="hover:text-white transition-colors"
          >
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
