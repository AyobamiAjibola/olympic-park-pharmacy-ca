import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { directionsUrl, location, mapUrl, open_mon_fri, open_sat, pharmEmail, pharmPhone, province } from '@/constant/helper';
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const paragraphs = t(
    "About.paragraphs",
    { returnObjects: true }
  ) as string[];
  return (
    <>
        <Helmet>
          <title>About us | Olympic Park Pharmacy</title>
          <meta
            name="description"
            content="Learn more about Olympic Park Pharmacy, our mission, location, and commitment to quality healthcare."
          />

          <meta
            name="keywords"
            content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
          />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <section className="pb-10 lg:px-12 px-5 md:px-8 w-full bg-slate-50 ">
            <div className="flex flex-col justify-center items-center pt-15">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-2 py-1 text-xs font-semibold text-main shadow-sm">
                Personalized Pharmacy Care 
              </span>
              <span className="mt-6 inline-block text-3xl md:text-6xl font-bold text-main">
                {t("About.title")}
              </span>
              <span className="mb-14 inline-block text-sm md:text-lg font-normal text-slate-600 md:max-w-1/2 max-w-lvw">
                {t("About.subTitle")}
              </span>
            </div>
            
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mt-6 text-slate-600 leading-relaxed text-base text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <iframe
                  title="Olympic Park Pharmacy Location"
                  src={mapUrl}
                  className="h-112.5 w-full border-0 rounded-2xl"
                  loading="lazy"
                  allowFullScreen
                />

                <div className="mt-6 shadow-md border border-accent-grey bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-left" style={{ color: '#205090' }}>{t("map.title")}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{location}</p>
                        <p className="text-sm text-gray-600">{province}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{pharmPhone}</p>
                        <p className="text-sm text-gray-600">{t("map.callUs")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{pharmEmail}</p>
                        <p className="text-sm text-gray-600">{t("map.emailUs")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">Mon-Fri: {open_mon_fri}</p>
                        <p className="text-sm text-gray-600">Sat: {open_sat}, Sun & Holidays: Closed</p>
                      </div>
                    </div>
                  </div>

                   <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 inline-flex items-center justify-center rounded-full bg-main px-6 py-3 text-white font-semibold hover:bg-main-light transition"
                  >
                    {t("map.btnText")}
                  </a>
                </div>
              </div>

            </div>
          </section>
          <Footer/>
        </div>
    </>
  )
}
