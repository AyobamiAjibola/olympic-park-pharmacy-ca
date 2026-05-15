import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { directionsUrl, location, mapUrl, open_mon_fri, open_sat, pharmEmail, pharmPhone, pharmWhatsApp, province } from '@/constant/helper';
import ServiceCard from '@/components/ServiceCard';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import type { SyntheticEvent } from "react";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { db } from '@/firebase';

type WhyChooseItem = {
  title: string;
  desc: string;
};

type HowToSteps = {
  num: string;
  title: string;
  subTitle: string;
};

export type StatusType = {
  type: string;
  message: string;
}

export type ServicesTypes = {
  title: string;
  desc: string;
  short_desc: string;
}

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusType>({
    type: '',
    message: ''
  });
  const [email, setEmail] = useState<string>("")

  const handleSubmitSubscribe = async () => {
    setLoading(true)
    try {
        if(email === "") {
          setStatus({type: "error", message: t("messages.newsletter.err1")})
          setLoading(false)
          
          return;
        }
        const newsletterCollection = collection(db, 'newsletter');
        const q = query(newsletterCollection, where('email', '==', email.toLowerCase()));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            setLoading(false)
            return setStatus({type: "success", message: t("messages.newsletter.success2")})
        }
        await addDoc(newsletterCollection, {
          email: email.toLowerCase(),
          createdAt: serverTimestamp()
        });

        setLoading(false);
        setEmail('');
        setStatus({type: "success", message: t("messages.newsletter.success")})
    } catch (error) {
        console.log(error, 'error')
        setStatus({type: "error", message: t("messages.newsletter.err2")})
        setLoading(false)
    }
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY);
    formData.append("subject", "New Prescription Transfer Message from Olympic Park Pharmacy Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({type: "success", message: t("messages.transfer.success")});
        form.reset();
      } else {
        setStatus({type: "error", message: t("messages.transfer.err1")});
      }
    } catch (error: unknown) {
      setStatus({type: "error", message: t("messages.transfer.err2")});
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const whyChoose = t(
    "HomePage.chooseOlympic.why_choose",
    { returnObjects: true }
  ) as WhyChooseItem[];

  const steps = t(
    "HomePage.switchPharmacy.howTo.steps",
    { returnObjects: true }
  ) as HowToSteps[];

  const services = t(
    "HomePage.services.services",
    { returnObjects: true }
  ) as ServicesTypes[];

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
        <title>Home | Olympic Park Pharmacy</title>
        <meta
          name="description"
          content="Olympic Park Pharmacy provides prescription support, health consultations, refills, appointment booking, and friendly pharmacy care."
        />
        <meta
          name="keywords"
          content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
        />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen overflow-hidden">
            <Navbar />
            {/* Background Video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/pharmacy-hero.jpg"
            >
              <source src="/pharmacy_vid.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Text Content */}
            <div className="lg:px-12 px-5 md:px-8 relative z-10 flex h-full items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                viewport={{ once: true, amount: 0.08 }} 
                className="flex flex-col items-start w-full h-full"
              >
                <span className="text-accent-grey w-auto mb-4 mt-14 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-md">
                  {t("HomePage.hero.badge")}
                </span>

                <span className="hidden md:block text-white text-4xl mt-6 font-bold leading-tight sm:text-5xl md:text-6xl text-left">
                  {t("HomePage.hero.title")} Olympic Park <br/> Pharmacy
                </span>
                <span className="block md:hidden text-white text-4xl mt-6 font-bold leading-tight sm:text-5xl md:text-6xl text-left">
                  {t("HomePage.hero.title")} Olympic Park Pharmacy
                </span>

                <p className="mt-6 text-lg leading-tight text-white md:text-xl text-left md:max-w-2xl font-light">
                  {t("HomePage.hero.subText")}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => {
                      document
                        .getElementById("prescription")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cursor-pointer py-6 rounded-xl bg-main px-6 font-medium text-white shadow-lg transition hover:bg-main-light"
                  >
                    {t("HomePage.hero.btnText1")}
                  </Button>

                  <Button 
                    onClick={()=>navigate('/contact')}
                    className="cursor-pointer py-6 rounded-xl border border-white/40 bg-white/10 px-6 font-medium text-white backdrop-blur-md transition hover:bg-white/20">
                    {t("HomePage.hero.btnText2")}
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-access-grey lg:px-12 px-5 md:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.08 }}
              className="mx-auto max-w-7xl"
            >
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <span className="mt-5 text-2xl tracking-tight text-main md:text-4xl">
                  {t("HomePage.chooseOlympic.title")} Olympic Park Pharmacy
                </span>
              </div>
              <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative">
                  <img
                    src="/choose.jpg"
                    alt="Pharmacist helping customers"
                    className="w-full h-90 object-cover rounded-3xl shadow-2xl"
                  />

                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-2 shadow-lg">
                    <p className="text-blue-900 font-bold text-lg">
                      {t("HomePage.chooseOlympic.text1")}
                    </p>
                    <p className="text-slate-600 mt-1 text-sm">
                      {t("HomePage.chooseOlympic.text2")}
                    </p>
                  </div>
                </div>

                <ul className="list-disc pl-6 space-y-3">
                  {whyChoose.map((item, index) => (
                    <li key={index} className="text-gray-600 text-left">
                      <span className="text-black font-bold">
                        {item.title}
                      </span>
                      : {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Prescription Section */}
          <section id="prescription" className="lg:px-12 px-5 md:px-8 relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-blue-50 pt-10 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.08 }}
              className="mx-auto max-w-7xl"
            >
              <div className="mx-auto mb-12 max-w-3xl text-center">

                <span className="mt-5 text-2xl tracking-tight text-main md:text-4xl">
                  {t("HomePage.switchPharmacy.title")}
                </span>

                <p className="mt-4 text-lg leading-relaxed text-gray-600 font-light">
                  {t("HomePage.switchPharmacy.subTitle")}
                </p>
              </div>

              <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left Side */}
                <div className="relative">
                  <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-main via-cyan-500 to-blue-500 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                    <h3 className="text-2xl font-bold">
                      {t("HomePage.switchPharmacy.howTo.title")}
                    </h3>

                    <p className="mt-3 text-base leading-5 text-white/85">
                      {t("HomePage.switchPharmacy.howTo.subTitle")}
                    </p>

                    <div className="mt-8 space-y-4">
                      {steps.map((step) => (
                        <div
                          key={step.num}
                          className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-emerald-600">
                            {step.num}
                          </div>

                          <div className='text-left'>
                            <h4 className="font-semibold">
                              {step.title}
                            </h4>

                            <p className="mt-1 text-sm leading-relaxed text-white/75">
                              {step.subTitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-relaxed text-white/85 backdrop-blur-md">
                      {t("HomePage.switchPharmacy.howTo.bottomText")}
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl md:p-8">
                  <div className="mb-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {t("HomePage.switchPharmacy.transfer.title")}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray-600">
                      {t("HomePage.switchPharmacy.transfer.subTitle")}
                    </p>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <div className='flex items-center gap-1'>
                          <label className="block text-left text-sm font-semibold text-gray-700">
                            {t("HomePage.switchPharmacy.transfer.fn")}
                          </label>
                          <p className='text-red-600 text-left'>*</p>
                        </div>

                        <input
                          name="Full Name"
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className='flex items-center gap-1'>
                          <label className="block text-left text-sm font-semibold text-gray-700">
                            {t("HomePage.switchPharmacy.transfer.ph")}
                          </label>
                          <p className='text-red-600 text-left'>*</p>
                        </div>

                        <input
                          name="Phone Number"
                          required
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 ">
                      <div className='flex items-center gap-1'>
                        <label className="block text-left text-sm font-semibold text-gray-700">
                          {t("HomePage.switchPharmacy.transfer.email")}
                        </label>
                        <p className='text-red-600 text-left'>*</p>
                      </div>

                      <input
                        name="Email"
                        required
                        type="email"
                        placeholder="john.doe@gmail.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <div className='flex items-center gap-1'>
                          <label className="block text-left text-sm font-semibold text-gray-700">
                            {t("HomePage.switchPharmacy.transfer.currentPharm.name")}
                          </label>
                          <p className='text-red-600 text-left'>*</p>
                        </div>

                        <input
                          name="Pharmacy Name"
                          required
                          type="text"
                          placeholder={t("HomePage.switchPharmacy.transfer.currentPharm.placeholder")}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className='flex items-center gap-1'>
                          <label className="block text-left text-sm font-semibold text-gray-700">
                            {t("HomePage.switchPharmacy.transfer.pharmPhone")}
                          </label>
                          <p className='text-red-600 text-left'>*</p>
                        </div>

                        <input
                          name="Pharmacy Phone Number"
                          required
                          type="tel"
                          placeholder="(555) 987-6543"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 ">
                      <div className='flex items-center gap-1'>
                        <label className="block text-left text-sm font-semibold text-gray-700">
                          {t("HomePage.switchPharmacy.transfer.prescription.name")}
                        </label>
                        <p className='text-red-600 text-left'>*</p>
                      </div>
                      
                      <textarea
                        name="Prescription"
                        required
                        rows={4}
                        placeholder={t("HomePage.switchPharmacy.transfer.prescription.placeholder")}
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                      />
                    </div>
                    {status && <p className={`${status.type === 'success' ? 'text-green-600' : 'text-red-600'} text-semibold`}>{status.message}</p>}
                    <Button
                      type="submit"
                      className="w-full bg-main px-6 py-6 font-semibold text-white shadow-lg cursor-pointer transition hover:bg-main-light"
                    >
                      {loading 
                        ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> 
                        : t("HomePage.switchPharmacy.transfer.btnText")}
                    </Button>

                    <p className="text-center text-xs leading-relaxed text-gray-500">
                      {t("HomePage.switchPharmacy.transfer.bottomText")}
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Services Preview */}
          <section className="bg-white lg:px-12 px-5 md:px-8 md:pt-16 md:pb-16 pt-16 pb-8">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <span className="mt-5 text-2xl tracking-tight text-main md:text-4xl">
                  {t("HomePage.services.title")}
                </span>
                <p className="mt-4 text-lg font-light leading-relaxed text-gray-600">
                  {t("HomePage.services.subTitle")}
                </p>
              </div>
              <div className='md:hidden'>
                <Swiper
                  spaceBetween={24}
                  slidesPerView={1}
                  keyboard={{ enabled: true }}
                  navigation
                  modules={[Navigation, Keyboard]}
                  className="w-full pb-12 [&_.swiper-slide]:h-auto [&_.swiper-slide]:flex mt-10"
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 28,
                    },
                  }}
                >
                  {services.slice(0, 6).map((service, index) => (
                    <SwiperSlide key={service.title} className="h-auto mb-12">
                      <ServiceCard index={index} {...service} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="hidden md:grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
                {services.slice(0, 6).map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    index={index}
                    {...service}
                  />
                ))}
              </div>
            </div>

            <Button
              onClick={()=>navigate('/services')}
              className="bg-main px-6 py-6 md:mt-8 font-semibold text-white shadow-lg cursor-pointer transition hover:bg-main-light"
            >
              {t("HomePage.services.btnText")}
            </Button>
          </section>

          {/* Newsletter */}
          <section className="lg:px-12 px-5 md:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.08 }}
              className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-emerald-950 p-8 text-center text-white shadow-2xl md:p-12"
            >
              {/* Glow Effects */}
              <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                <Mail className="mx-auto mb-4 text-emerald-400" size={36} />

                <h2 className="text-3xl font-bold">
                  {t("HomePage.subscribe.title")}
                </h2>

                <p className="mt-3 text-slate-300 ">
                  {t("HomePage.subscribe.subTitle")}
                </p>
                {status && <p className={`${status.type === 'success' ? 'text-green-300' : 'text-red-300'} text-semibold`}>{status.message}</p>}
                <div className="mx-auto mt-8 flex md:flex-row flex-col max-w-xl gap-3 mb-2">
                  <input
                    value={email}
                    required
                    onChange={(e)=>setEmail(e.currentTarget.value)}
                    type="email"
                    placeholder= {t("HomePage.subscribe.placeholder")}
                    className="min-h-12 flex-1 rounded-full border border-white/10 bg-white px-5 text-slate-900 outline-none"
                  />
                  <Button
                    onClick={handleSubmitSubscribe}
                    className="rounded-full bg-main px-6 py-6 font-semibold text-white shadow-lg cursor-pointer transition hover:bg-main-light "
                  >
                    {loading 
                      ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> 
                      : t("HomePage.subscribe.btnText")}
                  </Button>
                </div>
                <p className="text-center text-xs leading-relaxed text-accent-grey">
                  {t("HomePage.subscribe.bottomText")}
                </p>
              </div>
            </motion.div>
          </section>

          <section className="pb-10 lg:px-12 px-5 md:px-8 w-full bg-slate-50 ">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="overflow-hidden">
                <iframe
                  title="Olympic Park Pharmacy Location"
                  src={mapUrl}
                  className="h-112.5 w-full border-0 rounded-2xl"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="shadow-md border border-accent-grey bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
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
          </section>
        </main>

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${pharmWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
          aria-label="Chat on WhatsApp"
        >
          <img
            src='/whatsapp.svg'
            alt="chat on whatsapp"
            className='h-28 w-28'
          />
        </a>
        <Footer />
      </div>
    </>
  );
};

export default Index;