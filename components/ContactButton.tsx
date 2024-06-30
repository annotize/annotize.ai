import { Button } from "@/components/ui/button";
import { Hrefs } from "@/lib/Hrefs";
import Link from "next/link";

export function ContactButton() {
  return (
    <Button asChild className="h-16 w-48 text-xl">
      <Link href={Hrefs.contact}>Contact us</Link>
    </Button>
  );
}
