import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { location, mapUrl, open_mon_fri, open_sat, open_sun, pharmEmail, pharmFax, pharmPhone, pharmWhatsApp, province } from '@/constant/helper';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
import type { StatusType } from "./Index";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusType>({
    type: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY);
    formData.append("subject", "New Contact Message from Olympic Park Pharmacy Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        // setStatus({
        //   type: "success",
        //   message: t("messages.contact.success")
        // });
        navigate('/thank-you')
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: t("messages.contact.err1")
        });
      }
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message: t("messages.contact.err2")
      });
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!status.message) return;

    const timeout = setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [status]);

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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.08 }} 
            className="flex flex-col justify-center items-center"
          >
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-2 py-1 text-xs font-semibold text-main shadow-sm">
              {t("contact_us.badge")}
            </span>
            <span className="md:max-w-[60vw] mt-6 inline-block text-3xl md:text-4xl font-bold text-main">
              {t("contact_us.title")}
            </span>
            <span className="md:max-w-[50vw] inline-block text-sm md:text-base font-normal text-slate-600">
              {t("contact_us.subTitle")}
            </span>
          </motion.div>

          {/* Content */}
          <div className="justify-center mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
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

              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                      {t("contact_us.sendUsMsg.fn")}
                    </label>
                    <input
                      name="Full Name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-main focus:bg-white"
                    />
                  </div>

                  <div>
                    <div className='flex items-center gap-1'>
                      <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                        {t("contact_us.sendUsMsg.email")}
                      </label>
                      <p className='text-red-600 text-left'>*</p>
                    </div>
                    
                    <input
                      name="Email"
                      required
                      type="email"
                      placeholder="john.doe@gmail.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-main focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                      {t("contact_us.sendUsMsg.phone")}
                    </label>
                    <input
                      name="Phone Number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-main focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                      {t("contact_us.sendUsMsg.inquiry")}
                    </label>
                    <select 
                      name="Inquiry Type"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-main focus:bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Prescription Refill</option>
                      <option>Medication Review</option>
                      <option>Vaccination</option>
                      <option>Appointment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-1'>
                    <label className="text-left mb-2 block text-sm font-semibold text-slate-700">
                      {t("contact_us.sendUsMsg.msg.name")}
                    </label>
                    <p className='text-red-600 text-left'>*</p>
                  </div>

                  <textarea
                    required
                    name="Message"
                    rows={6}
                    placeholder={t("contact_us.sendUsMsg.msg.placeholder")}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-main focus:bg-white"
                  />
                </div>

                {status && <p className={`${status.type === "success" ? 'text-green-600' : 'text-red-600'} text-semibold`}>{status.message}</p>}

                <Button
                  type="submit"
                  className="cursor-pointer inline-flex w-full items-center justify-center gap-2 bg-main px-8 py-6 font-bold text-white shadow-sm transition hover:bg-main-light hover:shadow-md"
                >
                  {loading
                    ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    : (
                      <>
                        <Send size={18} />
                        {t("contact_us.sendUsMsg.btn")}
                      </>
                    )
                  }
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
                      <Printer size={22} />
                    </div>
                    <div className="flex justify-center items-start flex-col">
                      <p className="font-semibold">Fax</p>
                      <p className="mt-1 text-slate-300">{pharmFax}</p>
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
                      <p className="mt-1 text-slate-300 text-left">
                        {`${location} ${province}`}
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
                      <p className="text-slate-300">
                        Sunday: {open_sun}
                      </p>
                      <p className="text-slate-300">Holidays: Closed</p>
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
