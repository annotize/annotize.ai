import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl">Contact us</h1>
      <ContactForm />;
    </div>
  );
}
