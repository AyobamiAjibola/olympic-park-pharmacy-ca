import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  MessageCircle,
  User,
  Mail,
  Phone,
  FileText,
  Send,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState, type SyntheticEvent } from "react";
import type { StatusType } from "./Index";
import { useNavigate } from "react-router-dom";

export default function Complaint() {
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
    
        formData.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY_COMPLAIN);
        formData.append("subject", "New Complain: Olympic Park Pharmacy");
    
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          });
    
          const result = await response.json();
    
          if (result.success) {
            // setStatus({
            //   type: "success",
            //   message: t("complain.messages.success")
            // });
            navigate('/thank-you')
            form.reset();
          } else {
            setStatus({
              type: "error",
              message: t("complain.messages.err")
            });
          }
        } catch (error: unknown) {
          setStatus({
            type: "error",
            message: t("complain.messages.err")
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
                <title>Complaint | Olympic Park Pharmacy</title>
                <meta
                    name="description"
                    content="Contact Olympic Park Complaint"
                />
        
                <meta
                    name="keywords"
                    content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
                />
            </Helmet>
            <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-blue-50">
                <Navbar />
                <main className="min-h-screen bg-slate-50 px-4 pb-16">
                    <section className="mx-auto max-w-7xl px-5 py-10 md:pt-20 md:px-8 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.08 }}
                            viewport={{ once: true, amount: 0.08 }} 
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="rounded-full bg-white p-4 shadow-md">
                                <MessageCircle className="h-8 w-8 text-main" />
                            </div>
                            <span className="md:max-w-[60vw] mt-6 inline-block text-3xl md:text-4xl font-bold text-main">
                                {t("complain.title")}
                            </span>
                            <span className="md:max-w-[50vw] inline-block text-sm md:text-base font-normal text-slate-600">
                                {t("complain.subTitle")}
                            </span>
                        </motion.div>
                    </section>
                    <div className="mx-auto max-w-4xl">
                        <div className="rounded-3xl bg-white p-8 shadow-md md:p-12">
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="text-left mb-2 block text-sm font-medium text-slate-700">
                                            {t("complain.fn")}
                                        </label>
                                        
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                                            <input
                                                name="Full Name"
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-main"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-left mb-2 block text-sm font-medium text-slate-700">
                                            {t("complain.email")}
                                        </label>

                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                                            <input
                                                type="Email"
                                                required
                                                name="email"
                                                placeholder="john.doe@gmail.com"
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-main"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="text-left mb-2 block text-sm font-medium text-slate-700">
                                            {t("complain.phone")}
                                        </label>

                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                                            <input
                                                type="tel"
                                                name="Phone Number"
                                                required
                                                placeholder="(555) 123-4567"
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-main"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-left mb-2 block text-sm font-medium text-slate-700">
                                            {t("complain.category")}
                                        </label>

                                        <select name="Inquiry Type"
                                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-main"
                                        >
                                            <option>{t("complain.options.default")}</option>
                                            <option>{t("complain.options.cus")}</option>
                                            <option>{t("complain.options.pre")}</option>
                                            <option>{t("complain.options.staff")}</option>
                                            <option>{t("complain.options.privacy")}</option>
                                            <option>{t("complain.options.others")}</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-left mb-2 block text-sm font-medium text-slate-700">
                                        {t("complain.detail.name")}
                                    </label>

                                    <div className="relative">
                                        <FileText className="absolute left-4 top-5 h-5 w-5 text-slate-400" />

                                        <textarea
                                            rows={6}
                                            required
                                            name="complain"
                                            placeholder={t("complain.detail.placeholder")}
                                            className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-main"
                                        />
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                                    <p className="text-sm leading-7 text-amber-800">
                                        {t("complain.bottomTxt")}
                                    </p>
                                </div>
                                {status && <p className={`${status.type === "success" ? 'text-green-600' : 'text-red-600'} text-semibold`}>{status.message}</p>}
                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        className="cursor-pointer bg-main px-8 py-5 text-sm font-semibold text-white transition hover:bg-main-light"
                                    >
                                        {loading
                                            ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                            : (
                                            <>
                                                <Send size={18} />
                                                {t("complain.btn")}
                                            </>
                                            )
                                        }
                                    </Button>
                                </div>
                                <p className="leading-7 text-slate-600">
                                    {t("license.concern.sub_title")}
                                </p>
                            </form>
                        </div>
                    </div>
                </main>

                <Footer/>
            </div>
    </>
    )
}
