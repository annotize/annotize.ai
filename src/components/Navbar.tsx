import "@fontsource/allerta-stencil";
import { Hrefs } from "@/lib/Hrefs";
import { ContactButton } from "@/components/ContactButton";

export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between">
        <a href={Hrefs.root} className="flex space-x-3 rtl:space-x-reverse">
          <span className="self-center md:text-xl lg:text-2xl xl:text-4xl font-semibold whitespace-nowrap dark:text-white">
            <span style={{fontFamily: "Allerta Stencil"}}>annotize.ai</span>
          </span>
        </a>
        <div className="hidden md:block justify-end">
          <ContactButton />
        </div>
      </div>
    </nav>
  );
}
