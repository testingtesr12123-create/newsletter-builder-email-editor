"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/icons/free-1.png",
    price: "$0",
    description: "Free access. Forever",
    ctaText: "Try Now",
    ctaVariant: "outline",
    featureHeader: "All basic features",
    features: [
      "1,000 sessions per month",
      "Support for one domain",
      "Standard Email Support",
    ],
  },
  {
    name: "Startup plan",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/icons/startup-2.png",
    price: "$200",
    description: "Best for small team",
    ctaText: "Get This Plan",
    ctaVariant: "primary",
    featureHeader: <>Everything in <strong>free</strong> plus...</>,
    features: [
      "20,000 sessions per month",
      "Custom Branding",
      "Priority Email Support",
    ],
  },
  {
    name: "Business plan",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/icons/business-3.png",
    price: "$2,000",
    description: "Best for growing businesses",
    ctaText: "Get This Plan",
    ctaVariant: "primary",
    featureHeader: <>Everything in <strong>startup</strong> plus...</>,
    features: [
      "50,000 sessions per month",
      "Dedicated Slack Channel",
      "Multiple sub-domains support",
    ],
  },
];

const enterprisePlan = {
  name: "Enterprise plan",
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/icons/enterprise-4.png",
  price: "Custom",
  description: "Best for large organizations",
  ctaText: "Contact sales",
  featureHeader: <>Everything in <strong>business</strong> plus...</>,
  features: [
    "24x7 Phone Support",
    "Unlimited Sessions",
    "Unlimited Cloud Storage",
    "Custom Plugin Support",
    "Multiple Domains Support",
    "Custom Branding",
    "Custom Development",
  ],
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-20 md:py-24 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-10">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-white">PRICING</h2>
          <hr className="absolute -bottom-3 left-1/2 w-8 -translate-x-1/2 border-t-2 border-primary" />
        </div>
        <h3 className="text-4xl lg:text-[48px] font-bold leading-tight text-white max-w-2xl">
          Plans that fit your scale
        </h3>
        <p className="mt-6 mb-10 text-lg text-white/70 max-w-xl">
          Simple, transparent pricing that grows with you.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center rounded-full bg-white/5 p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              billingCycle === "monthly" ? "bg-primary text-white" : "text-white/70 hover:bg-white/10"
            }`}
          >
            Month billing
          </button>
          <button
            onClick={() => setBillingCycle("annually")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              billingCycle === "annually" ? "bg-primary text-white" : "text-white/70 hover:bg-white/10"
            }`}
          >
            Annual billing
          </button>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-xl bg-gradient-to-b from-white/20 to-transparent p-px">
              <div className="flex h-full flex-col rounded-[11px] bg-card/[.95]">
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                      <Image src={plan.icon} alt={`${plan.name} icon`} width={32} height={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-white">{plan.name}</h4>
                  </div>
                  <p className="mt-6 text-left text-5xl font-bold text-white">{plan.price}</p>
                  <p className="mt-2 text-left text-white/70">{plan.description}</p>
                  <a href="#" className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-medium transition ${
                    plan.ctaVariant === 'outline'
                      ? 'border-2 border-white/30 text-white hover:border-primary hover:bg-primary/10'
                      : 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_2px_12px_rgba(184,87,216,0.3)] hover:brightness-110'
                  }`}>
                    {plan.ctaText}
                  </a>
                </div>
                <hr className="mx-8 border-white/10" />
                <div className="flex-grow p-8">
                  <h5 className="text-left text-xs font-bold uppercase tracking-wider text-white">FEATURES</h5>
                  <div className="mt-2 text-left text-sm text-white/70">
                    {plan.featureHeader}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-left text-sm text-white/90">
                        <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="rounded-xl p-px" style={{ background: 'linear-gradient(315deg, #e85c9e, #8b5cf6 50%, #b857d8)' }}>
            <div className="flex flex-col rounded-[11px] p-8 md:flex-row md:gap-8" style={{ background: 'linear-gradient(315deg, rgba(43, 26, 75, 0.6), #1a0b2e 80%)' }}>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                    <Image src={enterprisePlan.icon} alt={`${enterprisePlan.name} icon`} width={32} height={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{enterprisePlan.name}</h4>
                </div>
                <p className="mt-6 text-left text-5xl font-bold text-white">{enterprisePlan.price}</p>
                <p className="mt-2 text-left text-white/70">{enterprisePlan.description}</p>
                <a href="mailto:sdk-enterprise@grapesjs.com" className="mt-6 block w-full rounded-full bg-gradient-to-r from-primary to-accent py-3 text-center text-sm font-medium text-white shadow-[0_2px_12px_rgba(184,87,216,0.3)] transition hover:brightness-110 md:w-auto md:px-10">
                  {enterprisePlan.ctaText}
                </a>
              </div>
              <hr className="my-8 border-white/10 md:hidden" />
              <div className="flex-1 md:pl-2">
                <h5 className="text-left text-xs font-bold uppercase tracking-wider text-white">FEATURES</h5>
                <div className="mt-2 text-left text-sm text-white/70">
                  {enterprisePlan.featureHeader}
                </div>
                <ul className="mt-4 space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3">
                  {enterprisePlan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-left text-sm text-white/90">
                      <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}