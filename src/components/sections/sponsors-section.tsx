import Image from "next/image";

const SponsorsSection = () => {
  return (
    <section className="flex flex-col items-center gap-20 px-4 pt-20 pb-44 text-center">
      {/* Gold Sponsors */}
      <div className="flex flex-col items-center gap-12">
        <div className="relative">
          <h2
            id="gold-sponsors"
            className="text-sm font-bold uppercase tracking-[0.05em] text-white/70 lg:text-xs"
          >
            OUR GOLD SPONSORS
          </h2>
          <hr className="absolute -bottom-2.5 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full border-none bg-primary" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-x-24">
          <a
            href="https://www.braze.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/braze_logo-2.svg"
              alt="Braze logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          <a
            href="https://www.phreesia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/phreesia_logo-27.png"
              alt="Phreesia logo"
              width={384}
              height={128}
              className="h-10 w-auto"
            />
          </a>
          <a
            href="https://veepn.com/vpn-apps/download-vpn-for-pc/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/images/logo_veepn-28.png"
              alt="Download the Best Windows VPN for PC"
              width={342}
              height={342}
              className="h-16 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Other Sponsors */}
      <div className="relative">
        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-white/70 lg:text-xs">
          OTHER SPONSORS
        </h2>
        <hr className="absolute -bottom-2.5 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full border-none bg-primary" />
      </div>
    </section>
  );
};

export default SponsorsSection;