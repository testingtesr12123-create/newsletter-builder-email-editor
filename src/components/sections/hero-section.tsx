"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const tabs = [
  {
    id: "html",
    label: "HTML/Website Builder",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/html_builder-1.webp",
    alt: "GrapesJS Studio SDK Webpage Demo",
  },
  {
    id: "newsletter",
    label: "Newsletter Builder",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/newsletter-2.webp",
    alt: "GrapesJS Studio SDK Email/Newsletter Demo",
  },
  {
    id: "document",
    label: "Document Builder",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/document-3.webp",
    alt: "GrapesJS Document Demo",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="text-center px-4 pt-[116px] pb-16 lg:pb-24 overflow-hidden">
      <h1 className="text-white font-bold leading-[1.1] tracking-[-0.02em] text-[56px] lg:text-[72px] max-w-5xl mx-auto">
        The embeddable drag-and-drop builder
      </h1>
      <p className="text-text-secondary mt-6 text-lg lg:text-[20px] max-w-3xl mx-auto leading-relaxed">
        Seamlessly integrate and create within your application.
        <br />
        Open-source, customizable, white-label, no-code, visual editor for:
        <br />
        <b className="text-white">Emails</b>, <b className="text-white">Landing Pages</b>, and <b className="text-white">Webpages</b>
      </p>

      <div className="flex flex-row gap-4 flex-wrap items-center justify-center pt-[50px] pb-[50px]">
        <a
          href="https://app.grapesjs.com/playground?utm_source=grapesjs&utm_medium=tryEditor"
          className="inline-block text-base font-medium rounded-full px-8 py-4 bg-gradient-to-r from-[#B857D8] to-[#E85C9E] text-white shadow-[0_4px_20px_rgba(184,87,216,0.3)] hover:brightness-110 transition-all transform hover:-translate-y-0.5"
        >
          Try the Editor
        </a>
        <a
          href="https://app.grapesjs.com/signin?utm_source=grapesjs&utm_medium=heroAccount"
          className="inline-block text-base font-medium rounded-full px-8 py-[14px] border-2 border-[rgba(255,255,255,0.2)] text-white hover:border-primary hover:bg-primary/10 transition-colors"
        >
          Create Account
        </a>
      </div>

      <div className="flex gap-3 items-center justify-center font-normal text-sm text-text-secondary mb-16">
        <span>Join the thousands of happy developers</span>
        <a
          href="https://github.com/grapesjs/grapesjs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm rounded-md overflow-hidden bg-[#21262d] border border-zinc-700 text-zinc-300 h-[27px]"
        >
          <span className="flex items-center gap-1.5 py-1 px-2.5 h-full bg-[#161b22]">
            <Star className="w-4 h-4" />
            Star
          </span>
          <span className="py-1 px-2.5 font-semibold text-white">25,074</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="border-b border-white/10 flex justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-3 px-4 text-base font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <div className="">{tab.label}</div>
              {activeTab === tab.id && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTabData && (
            <div className="flex flex-col w-full outline outline-4 outline-[#ffffff33] bg-[#252527] rounded-t-lg md:rounded-t-[16px] shadow-2xl shadow-primary/10">
              <div className="flex items-center px-2 md:px-4 gap-[5px] md:gap-2 h-[25px] md:h-9">
                <div className="rounded-full size-[6px] md:size-2.5 bg-[#ED6D60]"></div>
                <div className="rounded-full size-[6px] md:size-2.5 bg-[#F6BF52]"></div>
                <div className="rounded-full size-[6px] md:size-2.5 bg-[#64C556]"></div>
              </div>
              <img
                className="w-full"
                src={activeTabData.image}
                alt={activeTabData.alt}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;