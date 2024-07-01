/* eslint-disable @next/next/no-img-element */
import { ContactButton } from "@/components/ContactButton";
import { Button } from "@/components/ui/button";
import { Hrefs } from "@/lib/Hrefs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Feature {
  text: NonNullable<React.ReactNode>;
}

interface Benefit {
  heading: NonNullable<React.ReactNode>;
  image: {
    alt: string;
    src: string;
  };
  supportingFeatures: readonly Feature[];
  text: NonNullable<React.ReactNode>;
}

const benefits: Benefit[] = [
  {
    heading: "Content insights that matter to your business",
    image: { alt: "Image evoking the benefit", src: "benefit-1.png" },
    text: "Annotize uses your terminology to classify content, giving you straightforward, actionable insights without the need for additional reading.",
    supportingFeatures: [
      {
        text: "Fewer words, more essentials",
      },
      {
        text: "Image recognition",
      },
      {
        text: "Advanced Artificial Intelligence",
      },
    ],
  },
  {
    heading: "Your documents, your terms",
    image: { alt: "Image evoking the benefit", src: "benefit-2.png" },
    text: "Your terms clarfiy meaning and connect data. Deploy them at scale.",
    supportingFeatures: [
      {
        text: "Standard Terminologies",
      },
      {
        text: "Your taxonomies & ",
      },
    ],
  },
  {
    heading: "Seamless Integration with Your Data Tools",
    image: { alt: "Image evoking the benefit", src: "benefit-3.png" },
    text: "Annotize helps you integrate data, not isolate it.",
    supportingFeatures: [
      {
        text: "GraphQL & REST",
      },
      {
        text: "Graph native outputs (RDF/Cypher)",
      },
      {
        text: "Plug and Play Connectors",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <section className="flex flex-row items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-5xl">Insights on your terms</h1>
          <p className="text-gray-600" style={{ maxWidth: "50%" }}>
            Annotize analyzes your content using terms from your industry
            &mdash; from healthcare to finance to legal services.
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
      {benefits.map((benefit, benefitI) => (
        <section className="flex flex-col items-center gap-4" key={benefitI}>
          <h2 className="text-4xl">{benefit.heading}</h2>
          <p className="text-gray-600">{benefit.text}</p>
          <img
            alt={benefit.image.alt}
            src={benefit.image.src}
            style={{ maxWidth: "50%" }}
          />
          <div className="flex flex-row justify-between">
            {benefit.supportingFeatures.map((feature, featureI) => (
              <div
                className={cn({
                  "border-x-2":
                    featureI === 0 ||
                    featureI === benefit.supportingFeatures.length - 1 ||
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
      ))}
    </main>
  );
}
