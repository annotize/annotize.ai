import '@fontsource-variable/inter';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Layout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div className="flex flex-col gap-4 lg:gap-8 xl:gap-16 min-h-screen px-2 md:px-8 lg:px-16 xl:px-32 py-2 md:py-4">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
