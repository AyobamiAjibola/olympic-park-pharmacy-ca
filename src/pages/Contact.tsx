import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { address, mapUrl, open_mon_fri, open_sat, pharmEmail, pharmPhone, pharmWhatsApp } from '@/constant/helper';
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
        <Helmet>
          <title>Contact Us | Olympic Park Pharmacy</title>
          <meta
            name="description"
            content="Contact Olympic Park Pharmacy for prescriptions, appointments, consultations, and healthcare inquiries."
          />

          <meta
            name="keywords"
            content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
          />
        </Helmet>
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-blue-50">
          <Navbar />
          <section className="mx-auto max-w-7xl px-5 py-10 md:pt-20 md:px-8 lg:px-12">
            {/* Header */}
            <div className="flex flex-col justify-center items-center">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-2 py-1 text-xs font-semibold text-main shadow-sm">
                {t("contact_us.badge")}
              </span>
              <span className="md:max-w-[60vw] mt-6 inline-block text-3xl md:text-4xl font-bold text-main">
                {t("contact_us.title")}
              </span>
              <span className="md:max-w-[50vw] inline-block text-sm md:text-base font-normal text-slate-600">
                {t("contact_us.subTitle")}
              </span>
            </div>

            {/* Content */}
            <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Contact Form */}
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {t("contact_us.sendUsMsg.title")}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    {t("contact_us.sendUsMsg.subTitle")}
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                        {t("contact_us.sendUsMsg.fn")}
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </div>

                    <div>
                      <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                        {t("contact_us.sendUsMsg.email")}
                      </label>
                      <input
                        type="email"
                        placeholder="john.doe@gmail.com"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                        {t("contact_us.sendUsMsg.phone")}
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </div>

                    <div>
                      <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                        {t("contact_us.sendUsMsg.inquiry")}
                      </label>
                      <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100">
                        <option>General Inquiry</option>
                        <option>Prescription Refill</option>
                        <option>Medication Review</option>
                        <option>Vaccination</option>
                        <option>Appointment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                      {t("contact_us.sendUsMsg.msg.name")}
                    </label>
                    <textarea
                      rows={6}
                      placeholder={t("contact_us.sendUsMsg.msg.placeholder")}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="cursor-pointer inline-flex w-full items-center justify-center gap-2 bg-main px-8 py-6 font-bold text-white shadow-sm transition hover:bg-main-light hover:shadow-md md:w-auto"
                  >
                    <Send size={18} />
                    {t("contact_us.sendUsMsg.btn")}
                  </Button>

                  <p className="text-sm text-slate-500">
                    {t("contact_us.sendUsMsg.bottomText")}
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="rounded-3xl bg-main p-8 text-white shadow-xl">
                  <h2 className="text-2xl font-bold">{t("contact_us.visit_section.title")}</h2>
                  <p className="mt-3 text-slate-300">
                    {t("contact_us.visit_section.subTitle")}
                  </p>

                  <div className="mt-8 space-y-5">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                        <Phone size={22} />
                      </div>
                      <div className="flex justify-center items-start flex-col">
                        <p className="font-semibold">Phone</p>
                        <p className="mt-1 text-slate-300">{pharmPhone}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                        <Mail size={22} />
                      </div>
                      <div className="flex justify-center items-start flex-col">
                        <p className="font-semibold">Email</p>
                        <p className="mt-1 text-slate-300">
                          {pharmEmail}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                        <MapPin size={22} />
                      </div>
                      <div className="flex justify-center items-start flex-col">
                        <p className="font-semibold">Address</p>
                        <p className="mt-1 text-slate-300">
                          {address}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                        <Clock size={22} />
                      </div>
                      <div className="flex justify-center items-start flex-col">
                        <p className="font-semibold">Business Hours</p>
                        <p className="mt-1 text-slate-300">
                          Monday – Friday: {open_mon_fri}
                        </p>
                        <p className="text-slate-300">
                          Saturday: {open_sat}
                        </p>
                        <p className="text-slate-300">Sunday & Holidays: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                      <MessageCircle size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {t("contact_us.whatsapp.title")}
                      </h3>
                      <p className="mt-2 text-slate-600">
                        {t("contact_us.whatsapp.subTitle")}
                      </p>

                      <a
                        href={`https://wa.me/${pharmWhatsApp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700"
                      >
                        {t("contact_us.whatsapp.btnText")}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direction CTA */}
                {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900">
                    Find us easily
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Get directions to Olympic Park Pharmacy using Google Maps.
                  </p>

                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-2xl border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Get Directions
                  </a>
                </div> */}
              </div>
            </div>
          </section>

          <section className="pb-10 lg:px-12 px-5 md:px-8 w-full bg-slate-50 ">
            <div className="overflow-hidden">
              <iframe
                title="Olympic Park Pharmacy Location"
                src={mapUrl}
                className="h-112.5 w-full border-0 rounded-2xl"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </section>
          <Footer/>
        </div>
    </>
  )
}
