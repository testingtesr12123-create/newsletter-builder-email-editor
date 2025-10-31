import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "/#features", text: "Overview" },
  { href: "/sdk#features", text: "Features" },
  { href: "/sdk#pricing", text: "Pricing" },
];

const companyLinks = [
  { href: "https://grapesjs.com/careers", text: "Careers" },
  { href: "https://forms.gle/VUycp3rc8iCpbh9k8", text: "Contact" },
];

const resourcesLinks = [
  { href: "/blog", text: "Blog" },
  { href: "https://app.grapesjs.com/docs-sdk", text: "Studio SDK Docs" },
  { href: "https://grapesjs.com/docs", text: "GrapesJS Docs" },
];

const legalLinks = [
  { href: "/terms", text: "Terms" },
  { href: "/privacy", text: "Privacy" },
];

const socialLinks = [
  {
    href: "https://x.com/grapesjs",
    alt: "X logo",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/x-3.svg",
  },
  {
    href: "https://www.linkedin.com/company/grapesjs",
    alt: "LinkedIn logo",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/linkedin-4.svg",
  },
  {
    href: "https://discord.gg/QAbv3g4",
    alt: "Discord logo",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/discord-5.svg",
  },
  {
    href: "https://github.com/GrapesJS",
    alt: "GitHub logo",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/github-6.svg",
  },
];

const FooterSection = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 sm:px-8 py-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-8">
          <div className="col-span-2">
            <Link href="/" className="flex mb-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/grapesjs-logo-with-text-1.svg"
                alt="GrapesJS Logo"
                width={140}
                height={28}
                className="h-7 w-auto invert"
              />
            </Link>
            <p className="text-sm text-text-secondary max-w-[250px]">
              The leading open-source framework for building your visual web
              builders.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-4">Product</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {resourcesLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border-secondary flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-text-tertiary">
            © 2025 Grapes Studio Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;