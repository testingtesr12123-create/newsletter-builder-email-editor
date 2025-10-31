import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  layout: 'full' | 'vertical';
  className?: string;
  imageClassName?: string;
  badge?: string;
  children?: React.ReactNode;
}

const featuresData: FeatureCardProps[] = [
  {
    title: 'Built-in and Customizable UI',
    description: 'Accessible and enhanced UX for seamless user experience.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/1-11.png',
    layout: 'full',
  },
  {
    title: 'Multi-Format Support',
    description: 'Create landing pages, multipage websites, and newsletters.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/2-12.png',
    layout: 'full',
  },
  {
    title: 'White Label Solution',
    description: 'Style and customize your editor as you see fit.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/3-13.png',
    layout: 'full',
    imageClassName: 'pt-[36px]',
  },
  {
    title: 'Additional Panels',
    description: 'Includes Style Catalog and Template Manager.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/4-14.png',
    layout: 'vertical',
  },
  {
    title: 'Full Team Support',
    description: 'GrapesJS team provides dedicated assistance.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/5-15.png',
    layout: 'vertical',
  },
  {
    title: 'Flexible Data Hosting',
    description: 'No lock-in, choose between cloud or self-hosted options.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/7-16.png',
    layout: 'vertical',
  },
  {
    title: 'Unlimited Access Features',
    description: 'Explore all SDK features at no cost.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/8-17.png',
    layout: 'vertical',
  },
  {
    title: 'Your Components',
    description: 'Create your custom components and allow your users drag & drop them around.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/1-18.png',
    layout: 'vertical',
  },
  {
    title: 'Limitless styling',
    description: 'From simple to advanced and responsive styling. Configurable for any CSS properties.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/2-19.png',
    layout: 'vertical',
  },
  {
    title: 'Responsive design',
    description: 'All the tools you need to allow your uses to create content that looks great on any device.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/3-20.png',
    layout: 'vertical',
  },
  {
    title: 'Built-in Assets Manager',
    description: 'Keep track of your assets within the editor.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/7-21.png',
    layout: 'vertical',
  },
  {
    title: 'Pages and Layers managers',
    description: 'Organize your content with ease.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/4-22.png',
    layout: 'vertical',
  },
  {
    title: 'Symbols',
    description: 'Create reusable components across pages.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/5-23.png',
    layout: 'vertical',
  },
  {
    title: 'The code is there when you need it',
    description: 'GrapesJS outputs simple JSON and easily exports to any code and project (HTML/CSS/JS export built-in).',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/6-24.png',
    layout: 'vertical',
  },
  {
    title: 'Extendable and customizable by design',
    description: "Create custom plugins and modify the editor's UI to match your specific requirements.",
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/8-25.png',
    layout: 'vertical',
  },
  {
    title: 'Connect to External Data for Dynamic Content',
    description: 'Integrate your editor with external data sources to create dynamic and engaging experiences.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/9-26.png',
    layout: 'vertical',
    badge: 'Coming Soon',
  },
];

const FeatureCard = ({ title, description, imageUrl, layout, className = '', imageClassName = '', badge }: FeatureCardProps) => {
  const cardContent = (
    <>
      <div className={`p-8 flex-1 flex flex-col gap-2 ${layout === 'full' ? 'md:text-left text-center' : 'text-left'}`}>
        <div className="flex items-center gap-2">
          <h4 className="text-xl lg:text-2xl font-semibold text-foreground">{title}</h4>
          {badge && (
            <span className="bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
        <p className="text-text-secondary">{description}</p>
      </div>
      <div className={`relative ${layout === 'full' ? 'md:w-1/2' : ''} ${imageClassName}`}>
        <Image src={imageUrl} alt={title} width={600} height={400} className="w-full object-contain" />
      </div>
    </>
  );

  return (
    <div className={`rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-px shadow-xl shadow-black/30 ${className}`}>
      <div
        className={`bg-card rounded-[15px] h-full overflow-hidden flex ${
          layout === 'full' ? 'flex-col md:flex-row items-center' : 'flex-col'
        }`}
      >
        {cardContent}
      </div>
    </div>
  );
};

const FeaturesGridSection = () => {
    return (
        <section className="py-20 lg:py-24 flex flex-col items-center text-center px-4 sm:px-8" id="features">
            <div className="relative mb-10">
                <h2 className="text-xs lg:text-sm font-bold tracking-[0.05em] uppercase text-primary">FEATURES</h2>
                <hr className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-px border-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-4">Create Your Perfect Visual Editor</h3>
            <p className="mt-6 text-lg text-text-secondary max-w-3xl">
                Build powerful, customizable visual editors with Studio SDK and GrapesJS. Our versatile framework provides
                everything you need, from drag-and-drop editing to responsive design.
            </p>
            <a href="https://app.grapesjs.com/dashboard/sdk/licenses?utm_source=grapesjs&amp;utm_medium=featuresCta"
                className="my-10 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full shadow-[0_2px_12px_rgba(184,87,216,0.3)] hover:brightness-110 transition-all duration-300">
                Start Now<span className="font-normal"> - It's free</span>
            </a>
            
            <div className="w-full max-w-7xl mx-auto mt-6 flex flex-col gap-6">
                {featuresData.slice(0, 3).map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {featuresData.slice(3, 5).map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {featuresData.slice(5, 11).map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                     <div className="flex flex-col gap-6">
                        <FeatureCard {...featuresData[11]} />
                        <FeatureCard {...featuresData[12]} />
                    </div>
                    {featuresData.slice(13).map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                   
                </div>
            </div>
        </section>
    );
};

export default FeaturesGridSection;