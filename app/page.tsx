/* eslint-disable @next/next/no-img-element */
import { ContactButton } from "@/components/ContactButton";
import { Button } from "@/components/ui/button";
import { Hrefs } from "@/lib/Hrefs";
import { cn } from "@/lib/utils";
import Link from "next/link";

function BenefitSection({
  heading,
  features,
  imageSrc,
  text,
}: {
  heading: string;
  features: readonly {
    text: string;
  }[];
  imageSrc: string;
  text: string;
}) {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-4xl">{heading}</h2>
      <p className="text-gray-600">{text}</p>
      <img alt={heading} src={imageSrc} style={{ maxWidth: "50%" }} />
      <div className="flex flex-row justify-between">
        {features.map((feature, featureI) => (
          <div
            className={cn({
              "border-x-2":
                featureI === 0 ||
                featureI === features.length - 1 ||
                featureI % 2 === 0,
              "px-2": true,
            })}
            key={featureI}
          >
            {feature.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <section className="flex flex-row items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-5xl">Insights on your terms</h1>
          <p className="text-gray-600" style={{ maxWidth: "50%" }}>
            Annotize analyzes your content using terms from your industry – from
            healthcare to finance to legal services.
          </p>
          <ContactButton />
        </div>
        <div style={{ maxWidth: "50%" }}>
          <img
            alt="Hero image"
            src="hero-image.png"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </section>
      <BenefitSection
        features={[
          { text: "Feature 1" },
          { text: "Feature 2" },
          { text: "Feature 3" },
        ]}
        heading="Less reading"
        imageSrc="benefit-1.png"
        text="Have the AI identify the things your business cares about."
      />
      <BenefitSection
        features={[
          { text: "Feature 1" },
          { text: "Feature 2" },
          { text: "Feature 3" },
        ]}
        heading="Save money on labeling"
        imageSrc="benefit-2.png"
        text="Manual labeling is expensive and time consuming."
      />
      <BenefitSection
        features={[
          { text: "Feature 1" },
          { text: "Feature 2" },
          { text: "Feature 3" },
        ]}
        heading="Output in your terms"
        imageSrc="benefit-3.png"
        text="We deliver structured data from LLMs, not more words."
      />
    </main>
  );
}
