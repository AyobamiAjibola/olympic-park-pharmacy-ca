import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FileText, Mail, MapPin, MessageCircle, Phone, Printer, ShieldCheck } from "lucide-react";
import { Licenses, location, pharmEmail, pharmFax, pharmPhone, province } from "@/constant/helper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function ContactItem({
    icon,
    label,
    value,
    }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    }) {
    return (
        <div className="flex gap-3">
            <div className="mt-1 text-main [&>svg]:h-5 [&>svg]:w-5">
                {icon}
            </div>
            <div className="text-left">
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="text-sm font-semibold text-slate-900">{value}</p>
            </div>
        </div>
    );
}

type LicenseType = {
  name: string;
  no: string;
  img: string;
  expiry: string;
};


export default function License() {
    const { t } = useTranslation();

    // const licenseLink = "https://opensheet.elk.sh/1eVALv0hc3PGEgBnO50_J1gJMpvi4Grk9WHB3gx6Bu_I/licenses";

    // const [licenses, setLicenses] = useState<License[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const [selectedLicense, setSelectedLicense] = useState<LicenseType>();

    // const handleExp = (exp_date: string) => {
    //     const expiryDate = new Date(exp_date);

    //     const currentDate = new Date();

    //     const isExpired =
    //         expiryDate.getFullYear() < currentDate.getFullYear() ||
    //         (
    //             expiryDate.getFullYear() === currentDate.getFullYear() &&
    //             expiryDate.getMonth() < currentDate.getMonth()
    //         );

    //     return isExpired
    // }

    // const handlePdf = (link: string) => {
    //     if(!link) return;

    //     window.open(link, "_blank", "noopener,noreferrer");
    // }

    // useEffect(() => {
    //     const fetchLicense = async () => {
    //         try {
    //             setIsLoading(true);

    //             const response = await fetch(licenseLink);

    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch licenses");
    //             }

    //             const data = await response.json();

    //             setLicenses(data);
    //         } catch (error) {
    //             console.error(error);

    //             setError(
    //                 error instanceof Error
    //                     ? `${error.message}: Something went wrong`
    //                     : "Something went wrong"
    //             );
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchLicense()
        
    // }, []);

    return (
        <>
            <Helmet>
                <title>License | Olympic Park Pharmacy</title>
                <meta
                    name="description"
                    content="Contact Olympic Park Pharmacy License"
                />
        
                <meta
                    name="keywords"
                    content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
                />
            </Helmet>
            <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-blue-50">
                <Navbar />
                <section className="mx-auto max-w-7xl px-5 py-10 md:pt-20 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        viewport={{ once: true, amount: 0.08 }} 
                        className="flex flex-col justify-center items-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-2 py-1 text-xs font-semibold text-main shadow-sm">
                            {t("license.badge")}
                        </span>
                        <span className="md:max-w-[60vw] mt-6 inline-block text-3xl md:text-4xl font-bold text-main">
                            {t("license.title")}
                        </span>
                        <span className="md:max-w-[50vw] inline-block text-sm md:text-base font-normal text-slate-600">
                            {t("license.subTitle")}
                        </span>
                    </motion.div>
                </section>

                <section className="px-4 pb-14">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-6 flex items-center gap-3">
                                    <ShieldCheck className="h-6 w-6 text-main mb-1" />
                                    <h2 className="text-2xl font-semibold">
                                        {t("license.li_info")}
                                    </h2>
                                </div>
                                
                                <div className="grid gap-5">
                                    {Licenses.map((license, index) => (
                                        <div
                                            key={index}
                                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition"
                                        >
                                            <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-center">
                                                <div className="text-left">
                                                    <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-main">
                                                        Verified License
                                                    </div>

                                                    <h3 className="text-xl font-semibold text-slate-900">
                                                        {license.name}
                                                    </h3>

                                                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                                                        <p>
                                                            <span className="font-medium text-slate-800">
                                                                License Number:
                                                            </span>{" "}
                                                            {license.no}
                                                        </p>

                                                        <p>
                                                            <span className="font-medium text-slate-800">
                                                                Expiry:
                                                            </span>{" "}
                                                            {license.expiry}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center md:justify-end">
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedLicense(license)}
                                                        className="group cursor-zoom-in relative rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-main hover:shadow-md"
                                                    >
                                                        <img
                                                            src={license.img}
                                                            alt={license.name}
                                                            className="h-44 w-44 rounded-lg object-contain"
                                                        />

                                                        <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                                                            Click to preview
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-main mb-1" />
                                    <h2 className="text-2xl font-semibold">
                                        {t("license.regulatory")}
                                    </h2>
                                </div>

                                <p className="leading-7 text-slate-600">
                                    {t("license.regulatory_sub")}
                                </p>

                                <div className="mt-6">
                                    <Button
                                        className="inline-flex items-center justify-center rounded-lg bg-main px-5 py-5 text-sm font-semibold text-white transition hover:bg-main-light"
                                    >
                                        {t("license.verify")}
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center gap-3 flex-col md:flex-row">
                                    <MessageCircle className="h-6 w-6 text-main mb-1" />
                                    <h2 className="text-2xl font-semibold">
                                        {t("license.concern.title")}
                                    </h2>
                                </div>

                                <p className="leading-7 text-slate-600">
                                    {t("license.concern.sub_title")}
                                </p>

                                <Button
                                    onClick={()=>navigate("/complaint")}
                                    className="cursor-pointer mt-4 inline-flex items-center justify-center rounded-lg bg-main px-5 py-5 text-sm font-semibold text-white transition hover:bg-main-light"
                                >
                                    {t("license.btn_text")}
                                </Button>
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <h3 className="text-xl font-semibold">
                                    {t("license.contact.title")}
                                </h3>

                                <div className="mt-5 space-y-4">
                                    <ContactItem icon={<Phone />} label="Phone" value={pharmPhone} />
                                    <ContactItem icon={<Printer />} label="Fax" value={pharmFax} />
                                    <ContactItem icon={<Mail />} label="Email" value={pharmEmail} />
                                    <ContactItem icon={<MapPin />} label="Address" value={`${location} ${province}`} />
                                </div>
                            </div>

                        </aside>
                    </div>
                </section>

                <Dialog
                    open={!!selectedLicense}
                    onOpenChange={(open) => {
                        if (!open) setSelectedLicense(undefined);
                    }}
                >
                    <DialogContent className="max-w-3xl h-[90vh] overflow-y-scroll">
                        <DialogHeader>
                            <DialogTitle className="text-main font-extrabold">{selectedLicense?.name}</DialogTitle>
                            <DialogDescription>
                                License Number: {selectedLicense?.no} | Expiry: {selectedLicense?.expiry}
                            </DialogDescription>
                        </DialogHeader>

                        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <img
                                src={selectedLicense?.img}
                                alt={selectedLicense?.name}
                                className="max-h-[75vh] w-full rounded-lg object-contain"
                            />
                        </div>
                    </DialogContent>
                </Dialog>

                <Footer/>
            </div>
        </>
    )
}
