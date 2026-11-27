import { ChevronDown, Clock, MapPin, MessageCircle, Pill, Quote, Stethoscope, Syringe, Truck } from "lucide-react";
import { createPortal } from "react-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BOOKING_LINK } from "@/constant/helper";
import type en from "@/locales/en.json";

const site = "https://olympicparkpharmacy.ca";
const provider = {
  "@type": "Pharmacy",
  name: "Olympic Park Community Pharmacy",
  telephone: "+1-403-900-5553",
  url: site,
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 Canada Olympic Common SW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3H 6K4",
    addressCountry: "CA",
  },
};

const reasonIcons = {
  DeliveryPage: [Truck, Clock, Stethoscope, MessageCircle],
  TravelPage: [Syringe, Pill, MessageCircle, MapPin],
};

const sectionSpacing = "px-5 py-12 md:px-8 md:py-16";
const sectionTitle = "text-2xl font-bold text-main md:text-3xl";
const card = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8";
const cardTitle = "mt-4 text-xl font-semibold text-main";
const cardText = "mt-2 leading-relaxed text-slate-600";

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-slate-200">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-main [&::-webkit-details-marker]:hidden">
        <span>{q}</span>
        <ChevronDown aria-hidden="true" size={20} className="shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <p className="pb-5 leading-relaxed text-slate-600">{a}</p>
    </details>
  );
}

export default function ServiceDetail({ page }: { page: "DeliveryPage" | "TravelPage" }) {
  const { t } = useTranslation();
  const copy = t(page, { returnObjects: true }) as typeof en.DeliveryPage;
  const delivery = page === "DeliveryPage";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.title,
    provider,
    areaServed: (delivery ? ["Calgary", "Airdrie"] : ["Calgary"]).map(name => ({ "@type": "City", name })),
    ...(delivery && { offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" } }),
  };
  const button = "inline-flex w-full items-center justify-center rounded-xl border border-main px-8 py-4 font-semibold sm:w-auto";
  const primary = button + " bg-main text-white hover:bg-main/90";
  const secondary = button + " bg-white text-main hover:bg-slate-50";
  const call = <a href="tel:+14039005553" className={delivery ? primary : secondary}>{copy.ctaCall}</a>;
  const actions = (
    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
      {delivery ? (
        <>{call}<Link to="/#prescription" className={secondary}>{copy.ctaSecondary}</Link></>
      ) : (
        <><a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className={primary}>{copy.ctaSecondary}</a>{call}</>
      )}
    </div>
  );

  return (
    <>
      {createPortal(
        <Helmet>
          <title>{copy.metaTitle}</title>
          <meta name="description" content={copy.metaDescription} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>,
        document.head,
      )}
      <Navbar />
      <main>
        <section className="bg-slate-50 px-5 py-14 text-center md:px-8 md:py-16">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-main shadow-sm">{copy.badge}</span>
            <h1 className="mt-6 text-balance text-3xl font-bold text-main md:text-6xl">{copy.title}</h1>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-600 md:text-lg">{copy.subTitle}</p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-5">
              <p className="shrink-0 font-semibold text-main">{copy.proofLine}</p>
              <figure className="sm:border-l sm:border-slate-300 sm:pl-5 sm:text-left">
                <blockquote className="text-slate-700">{copy.proofQuote}</blockquote>
                <figcaption className="mt-1 text-xs text-slate-600">{copy.quoteSource}</figcaption>
              </figure>
            </div>
            {actions}
            <p className="mt-4 text-sm text-slate-600">{copy.areaLine}</p>
          </div>
        </section>
        <section className={sectionSpacing}>
          <div className="mx-auto max-w-6xl">
            <h2 className={sectionTitle}>{copy.steps.title}</h2>
            <ol className="mt-6 grid gap-5 md:grid-cols-3">
              {copy.steps.items.map((step, index) => (
                <li key={step.title} className={card}>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-main font-bold text-white">{index + 1}</span>
                  <h3 className={cardTitle}>{step.title}</h3>
                  <p className={cardText}>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className={sectionSpacing + " bg-slate-50"}>
          <div className="mx-auto max-w-6xl">
            <h2 className={sectionTitle}>{copy.reasons.title}</h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {copy.reasons.items.map((reason, index) => {
                const Icon = reasonIcons[page][index];
                return (
                  <li key={reason.title} className={card}>
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-main/10 text-main">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <h3 className={cardTitle}>{reason.title}</h3>
                    <p className={cardText}>{reason.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={sectionSpacing}>
          <div className="mx-auto max-w-6xl">
            <h2 className={sectionTitle}>{copy.quotesTitle}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {copy.quotes.map(quote => (
                <figure key={quote} className={card}>
                  <Quote aria-hidden="true" size={24} className="mb-4 text-main" />
                  <blockquote className="leading-relaxed text-slate-700">{quote}</blockquote>
                  <figcaption className="mt-3 text-xs text-slate-600">{copy.quoteSource}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className={sectionSpacing + " bg-slate-50"}>
          <div className="mx-auto max-w-3xl">
            <h2 className={sectionTitle}>{copy.prose.title}</h2>
            {copy.prose.paragraphs.map(paragraph => (
              <p key={paragraph} className="mt-4 leading-relaxed text-slate-600">{paragraph}</p>
            ))}
            <div className="mt-5 font-semibold text-main underline underline-offset-4">
              {copy.prose.linkHref === "BOOKING_LINK" ? (
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">{copy.prose.linkText}</a>
              ) : (
                <Link to={copy.prose.linkHref}>{copy.prose.linkText}</Link>
              )}
            </div>
          </div>
        </section>
        <section className={sectionSpacing}>
          <div className="mx-auto max-w-3xl">
            <h2 className={sectionTitle + " mb-2"}>{copy.faqTitle}</h2>
            {copy.faqs.map(faq => <FaqItem key={faq.q} {...faq} />)}
          </div>
        </section>
        <section className="bg-slate-50 px-5 py-12 text-center md:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-main md:text-4xl">{copy.finalTitle}</h2>
            <p className="mt-3 text-slate-600">{copy.finalText}</p>
            {actions}
            <p className="mt-4 text-sm text-slate-600">{copy.hours}</p>
            <Link className="mt-4 inline-block font-semibold text-main underline underline-offset-4" to={copy.crossLinkHref}>{copy.crossLinkText}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
