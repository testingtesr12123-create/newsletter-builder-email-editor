import React from 'react';

const FeaturesIntroSection = () => {
  return (
    <section id="features" className="py-20 text-center md:py-24">
      <div className="container px-4 mx-auto">
        <div className="mb-6">
          <span className="inline-block rounded-full bg-secondary px-5 py-2 text-xs font-bold uppercase tracking-wider text-white">
            Features
          </span>
        </div>

        <h2 className="mx-auto max-w-4xl text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-white lg:text-[4.5rem]">
          Create Your Perfect Visual Editor
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary lg:text-xl">
          Build powerful, customizable visual editors with Studio SDK and GrapesJS. Our versatile framework provides everything you need, from drag-and-drop editing to responsive design.
        </p>

        <a
          href="https://app.grapesjs.com/dashboard/sdk/licenses?utm_source=grapesjs&utm_medium=featuresCta"
          className="my-10 inline-block rounded-full bg-gradient-to-r from-primary to-accent py-4 px-8 text-base font-medium text-white shadow-[0_2px_12px_rgba(184,87,216,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:brightness-110"
        >
          Start Now <span className="font-normal">- It's free</span>
        </a>
      </div>
    </section>
  );
};

export default FeaturesIntroSection;