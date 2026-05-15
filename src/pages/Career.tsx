import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FORM_LINK } from "@/constant/helper";

export default function Career() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Career | Olympic Park Pharmacy</title>
                <meta
                    name="description"
                    content="Olympic Park Pharmacy provides prescription support, health consultations, refills, appointment booking, and friendly pharmacy care."
                />
                <meta
                    name="keywords"
                    content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
                />
            </Helmet>
            
            <div className="min-h-screen bg-background">
                <Navbar />
                <section className="py-20 lg:px-12 px-5 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="flex items-center justify-center flex-col max-w-4xl mx-auto bg-linear-to-br from-sky-50 to-white border border-slate-200 rounded-3xl p-12 shadow-sm"
                    >
                        <span className="inline-flex items-center rounded-full bg-main/10 px-4 py-1 text-sm font-medium text-main">
                            {t("Career.badge")}
                        </span>

                        <span className="my-6 text-3xl font-bold tracking-tight text-main">
                            {t("Career.title")}
                        </span>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
                            {t("Career.subTitle")}
                        </p>

                        <a
                            href={FORM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-2 inline-flex items-center mt-10 rounded-xl bg-main px-8 py-4 text-white font-semibold shadow hover:bg-main-light transition"
                        >
                            {t("Career.btnText")}
                        </a>

                        <p className="mt-4 text-sm text-slate-500">
                            {t("Career.bottomText")}
                        </p>

                    </motion.div>
                </section>
                <Footer />
            </div>
        </>
    )
}
