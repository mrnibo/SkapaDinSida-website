import { TitleSection } from "@/components/ui/titles";
import { IconBrandDrops } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

interface ValueItem {
  title: string;
  description: string;
}

interface Values {
  [key: string]: ValueItem;
}

export const ValuesClient = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <TitleSection text="Quality" />
      <ValuesItems />
    </div>
  );
};

const ValuesItems = () => {
  const t = useTranslations("about.aboutUs");
  const valuesObj = t.raw("values") as Values;
  const values = Object.values(valuesObj);

  return (
    <div className="flex flex-col p-4 gap-5">
      {values.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center group"
        >
          <div className="bg-gray-200 dark:bg-neutral-800 rounded-2xl p-6 w-full border border-gray-200 dark:border-neutral-800 group-hover:border-blue-500 duration-500 ">
            <div className="flex justify-center md:justify-between items-center">
              <div className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-5">
                <div className="uppercase text-xl font-bold group-hover:translate-x-1 scale-95 transition-transform duration-300">
                  {item.title}
                </div>
                <div className="w-4 h-1 md:w-1 md:h-4 bg-blue-500 rounded-full"></div>
                <div className="w-full">{item.description}</div>
              </div>
              <div className="group-hover:-translate-x-2 scale-95 transition-transform group-hover:text-blue-500 duration-300 hidden md:block">
                <IconBrandDrops />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
