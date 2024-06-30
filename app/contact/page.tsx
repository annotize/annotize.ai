import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-bold">Contact us</h1>
      </div>
      <div className="flex flex-row">
        <ContactForm />
      </div>
    </div>
  );
}
