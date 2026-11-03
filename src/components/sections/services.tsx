import Link from "next/link";
import { ArrowUpRight, Box, Code2, Gift, Layers3 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Landing pages",
    price: "₹20,000",
    icon: Code2,
    description: "A polished, responsive page that makes your business or idea easy to understand.",
    detail: "Domain and hosting are additional."
  },
  {
    title: "End-to-end products",
    price: "₹40,000–₹50,000",
    icon: Layers3,
    description: "A complete web product, from product flow and interface to working features and launch.",
    detail: "Final estimate depends on the features and integrations."
  },
  {
    title: "Greeting & mini-sites",
    price: "₹5,000–₹10,000",
    icon: Gift,
    description: "Personalised greeting designs, digital invitations and simple one-page experiences.",
    detail: "A good fit for celebrations and small, focused pages."
  },
  {
    title: "3D websites",
    price: "₹30,000–₹40,000",
    icon: Box,
    description: "A simple immersive page with interactive 3D scenes or a distinctive product showcase.",
    detail: "Scope and 3D assets can affect the final estimate."
  }
];

const ServicesSection = () => (
  <section id="services" className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
    <Link href="#services" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
      <h2
        className={cn(
          "bg-clip-text text-center text-4xl text-transparent md:text-7xl",
          "bg-gradient-to-b from-black/80 to-black/50",
          "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
        )}
      >
        Freelance services
      </h2>
    </Link>
    <p className="mx-auto mb-10 mt-5 max-w-2xl text-center text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
      Thoughtful websites and digital products for people with something worth sharing.
      These are approximate project prices; we can shape the scope together.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {services.map(({ title, price, icon: Icon, description, detail }) => (
        <article
          key={title}
          className="flex min-h-[310px] flex-col rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-black/20 dark:border-white/15 dark:bg-black/55 dark:hover:border-white/30"
        >
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/80 text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-white" aria-hidden="true">
            <Icon size={21} strokeWidth={1.7} />
          </div>
          <h3 className="text-xl font-semibold leading-snug">{title}</h3>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            <span className="sr-only">Approximate price: </span>
            <span aria-hidden="true" className="mr-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">Approx.</span>
            {price}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{description}</p>
          <p className="mt-4 border-t border-black/10 pt-3 text-xs leading-relaxed text-neutral-500 dark:border-white/15 dark:text-neutral-400">{detail}</p>
          <Link
            href="#contact"
            className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-medium text-slate-900 underline decoration-black/30 underline-offset-4 transition hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-white dark:decoration-white/40 dark:hover:decoration-white"
          >
            Discuss this service <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
    <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
      Prices are indicative and may change with the final scope. Third-party services and assets are quoted separately where needed.
    </p>
  </section>
);

export default ServicesSection;
