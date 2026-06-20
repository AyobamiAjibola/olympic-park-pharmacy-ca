import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type TeamType = {
    name: string;
    bio: string;
    languages: string;
    location: string;
    title: string;
    category: string;
}

export default function Team() {
    const { t } = useTranslation();
    const licenseLink = "https://opensheet.elk.sh/13DbDV7gUTzBznSw8Vx416XYAAc2WLQJe9ijpwINJ0wA/team";

    const [team, setTeam] = useState<TeamType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const sections = ["Pharmacist", "Pharmacy technician", "Assistant"]
    console.log(isLoading, error)
    const teamByCategory = team.reduce<Record<string, typeof team>>((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }

        acc[item.category].push(item);
        return acc;
    }, {});

    useEffect(() => {
        const fetchLicense = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(licenseLink);

                if (!response.ok) {
                    throw new Error("Failed to fetch licenses");
                }

                const data = await response.json();

                setTeam(data);
            } catch (error) {
                console.error(error);

                setError(
                    error instanceof Error
                        ? `${error.message}: Something went wrong`
                        : "Something went wrong"
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchLicense()
        
    }, []);

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
                <section className="lg:px-12 px-5 md:px-8 w-full bg-slate-50 ">
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

                <section className="pb-10 lg:px-12 px-5 md:px-8 w-full bg-slate-50">
                    {sections.map((category) => (
                        <div key={category}>
                            <div className="flex items-start">
                                <span className="text-3xl text-main font-semibold">{category}</span>
                            </div>
                            <hr/>
                            <div className="grid gap-6 md:grid-cols-2 my-10">
                                {teamByCategory[category]?.map((item, k) => (
                                    <div key={k} className="bg-white flex items-start justify-start flex-col p-6 shadow-sm rounded-xl">
                                        <span className="font-semibold leading-relaxed text-xl">{item.name}</span>
                                        <span className="text-black/60 text-lg font-normal leading-tight w-[40%] text-left">{item.title}</span>
                                        <div className="flex mt-2 gap-1">
                                            <span className="leading-relaxed text-xl">Languages known:</span> 
                                            <div className="flex">
                                                {item.languages.split(',').map((l, k)=> (
                                                    <div key={k} className="flex items-center justify-center rounded-lg px-2 bg-green-200 mx-1">
                                                        <span className="text-green-900 font-semibold text-xs">{l}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex mt-2 gap-1 items-center">
                                            <span className="leading-relaxed text-xl mb-1">Location:</span> 
                                            <span className="leading-relaxed text-lg font-bold">{item.location}</span> 
                                        </div>
                                        <span className="leading-relaxed font-medium mt-4 text-black/60 text-left">{item.bio}</span> 
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                <Footer/>
            </div>
        </>
    )
}
