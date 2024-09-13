/* eslint-disable @next/next/no-img-element */
import {ContactButton} from "@/components/ContactButton";
import {Button} from "@/components/ui/button";
import {Hrefs} from "@/lib/Hrefs";
import {cn} from "@/lib/utils";
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
        image: {alt: "Image evoking the benefit", src: "benefit-1.png"},
        text: "Annotize uses your terminology to classify content, giving you straightforward, actionable insights without the need for additional reading.",
        supportingFeatures: [
            {
                text: "Essential meanings via auto-classification",
            },
            {
                text: "Works with text, images, and structured data",
            },
            {
                text: "Uses cloud or on-premise language models",
            },
        ],
    },
    {
        heading: "Your documents, your terms",
        image: {alt: "Image evoking the benefit", src: "benefit-2.png"},
        text: "Your terms clarify meaning and connect data. Deploy terms at scale.",
        supportingFeatures: [
            {
                text: "Standard terminologies such as ICD, MeSH, Allotrope and others",
            },
            {
                text: "Bring-your-own terminology, from tag sets to ontologies",
            },
        ],
    },
    {
        heading: "Integrates with your tools",
        image: {alt: "Image evoking the benefit", src: "benefit-3.png"},
        text: "Annotize was built to break down data silos.",
        supportingFeatures: [
            {
                text: "GraphQL and REST APIs",
            },
            {
                text: "Graph native outputs",
            },
            {
                text: "Connectors for downstream analytics",
            },
        ],
    },
];

function BenefitImage({benefit}: { benefit: Benefit }) {
    return (
        <div>
            <img alt={benefit.image.alt} src={benefit.image.src}/>
        </div>
    );
}

function BenefitText({benefit}: { benefit: Benefit }) {
    return (
        <div className="flex flex-col gap-4 max-w-[56rem]">
            <h2 className="text-4xl">{benefit.heading}</h2>
            <p
                className="text-gray-600 text-left w-full"
                style={{maxWidth: "40rem"}}
            >
                {benefit.text}
            </p>
            <div className="flex flex-row">
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
        </div>
    );
}

export default function Home() {
    return (
        <main className="flex flex-col gap-24 xl:gap-32 items-center">
            <section className="flex flex-row justify-between">
                <div className="flex flex-col justify-center gap-4">
                    <h1 className="font-bold text-5xl">Insights on your terms</h1>
                    <p className="text-gray-600">
                        Annotize analyzes your content using terms from your industry.
                    </p>
                    <div className="text-center">
                        <ContactButton/>
                    </div>
                </div>
                <div className="hidden md:block max-w-[50%]">
                    <img
                        alt="Hero image"
                        src="hero-image.png"
                        style={{maxWidth: "80%"}}
                    />
                </div>
            </section>
            {benefits.map((benefit, benefitI) =>
                <section className="flex flex-col gap-4 items-center md:hidden" key={benefitI}>
                    <BenefitImage benefit={benefit} key={benefitI}/>
                    <BenefitText benefit={benefit} key={benefitI}/>
                </section>)}
            {benefits.map((benefit, benefitI) =>
                <section className="hidden md:block md:flex md:flex-row md:gap-8 lg:gap-8 xl:gap-16 items-center" key={benefitI}>
                    {benefitI % 2 === 0 ? (
                        <>
                            <BenefitImage benefit={benefit} key={benefitI}/>
                            <BenefitText benefit={benefit} key={benefitI}/>
                        </>
                    ) : (
                        <>
                            <BenefitText benefit={benefit} key={benefitI}/>
                            <BenefitImage benefit={benefit} key={benefitI}/>
                        </>
                    )}
                </section>)}
        </main>
    );
}
