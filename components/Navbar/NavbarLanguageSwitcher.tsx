"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target) {
      throw new Error("handleChange: e.target is null or undefined");
    }
    const selectedLocale = e.target.value;
    if (!selectedLocale) {
      throw new Error("handleChange: selectedLocale is null or undefined");
    }
    await router.push(pathname, { locale: selectedLocale });
  };

  return (
    <div>
      <select
        value={locale}
        onChange={handleChange}
        aria-label="Select Language"
        className="px-4 py-2 rounded-lg shadow-lg dark:bg-neutral-800"
      >
        <option value="en">English</option>
        <option value="sv">Svenska</option>
      </select>
    </div>
  );
}
