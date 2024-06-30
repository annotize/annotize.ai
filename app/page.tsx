/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold pb-4 text-4xl">Insights on your terms</h1>
          <p className="text-gray-600" style={{ maxWidth: "50%" }}>
            Annotize analyzes your content using terms from your industry – from
            healthcare to finance to legal services.
          </p>
        </div>
        <div style={{ maxWidth: "50%" }}>
          <img
            alt="Hero image"
            src="hero-image.png"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </main>
  );
}
