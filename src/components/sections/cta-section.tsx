import React from 'react';

const CtaSection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-20 text-center lg:py-24">
      <h3 className="max-w-3xl text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-foreground lg:text-[4.5rem]">
        Get started for free
      </h3>
      <p className="mt-6 max-w-xl text-lg text-muted lg:text-xl">
        Join the thousands of companies & developers using our editor today
      </p>
      <a
        href="https://app.grapesjs.com/dashboard/sdk/licenses?utm_source=grapesjs&utm_medium=preSponsorCta"
        className="mt-10 inline-block rounded-full bg-gradient-to-r from-primary to-accent py-[15px] px-8 text-base font-medium text-primary-foreground shadow-[0_2px_12px_rgba(184,87,216,0.3)] transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:brightness-110"
      >
        Get Started for Free
      </a>
    </section>
  );
};

export default CtaSection;