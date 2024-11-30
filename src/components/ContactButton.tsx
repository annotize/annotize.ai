import { Button } from "@/components/ui/button";
import { Hrefs } from "@/lib/Hrefs";

export function ContactButton() {
  return (
    <Button asChild className="h-16 w-48 text-xl">
      <a href={Hrefs.contact}>Contact us</a>
    </Button>
  );
}
