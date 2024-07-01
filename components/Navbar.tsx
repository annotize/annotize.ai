import Link from "next/link";
import { Allerta_Stencil } from "next/font/google";
import { Hrefs } from "@/lib/Hrefs";
import { Button } from "./ui/button";
import { ContactButton } from "@/components/ContactButton";

export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between">
        <Link href={Hrefs.root} className="flex space-x-3 rtl:space-x-reverse">
          <span className="self-center md:text-xl lg:text-2xl xl:text-4xl font-semibold whitespace-nowrap dark:text-white">
            <span className={allertStencil.className}>annotize.ai</span>
          </span>
        </Link>
        <div className="justify-end">
          <ContactButton />
        </div>
      </div>
    </nav>
  );
}

const allertStencil = Allerta_Stencil({ subsets: ["latin"], weight: "400" });
