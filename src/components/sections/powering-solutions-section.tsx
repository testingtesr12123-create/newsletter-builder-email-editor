import React from 'react';

const logos = [
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/microsoft-4.png", 
    alt: "Microsoft", 
    className: "" 
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/france-gov-5.png",
    alt: "Government of France", 
    className: ""
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/pfizer-6.png", 
    alt: "Pfizer", 
    className: "" 
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/bbc-7.png", 
    alt: "BBC", 
    className: "!brightness-0 !invert" 
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/deloitte-8.png", 
    alt: "Deloitte", 
    className: "!brightness-0 !invert !h-[25px]" 
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/braze-9.png", 
    alt: "Braze", 
    className: "" 
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/phresia-10.png",
    alt: "Phreesia", 
    className: "" 
  }
];

const PoweringSolutionsSection = () => {
  return (
    <>
      <hr className="w-full border-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="relative mb-16 text-center">
              <h2 className="font-bold text-sm lg:text-xs uppercase tracking-[0.05em] text-foreground">
                POWERING SOLUTIONS FOR
              </h2>
              <hr className="absolute -bottom-2.5 left-1/2 w-16 -translate-x-1/2 border-0 h-[2px] bg-primary" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-9 w-auto object-contain filter grayscale opacity-70 ${logo.className}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoweringSolutionsSection;