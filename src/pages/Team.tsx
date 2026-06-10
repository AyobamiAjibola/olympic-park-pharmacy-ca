import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Team() {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>Our Team | Olympic Park Pharmacy</title>
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
                        {t("team.title")}
                    </span>
                    <span className="mb-14 inline-block text-sm md:text-lg font-normal text-slate-600 md:max-w-1/2 max-w-lvw">
                        {t("team.subTitle")}
                    </span>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}
