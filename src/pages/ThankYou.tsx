import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
// import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
// import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //     navigate("/");
    //     }, 5000); // 5 seconds

    //     return () => clearTimeout(timer);
    // }, [navigate]);
    
    return (
        <>
            <Helmet>
                <title>Thank you | Olympic Park Pharmacy</title>
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
                <section className="flex min-h-screen items-center justify-center bg-linear-to-b from-white to-green-50 px-4">
                    <div className="text-center">
                        <motion.div
                        initial={{ scale: 0 }}
                            animate={{
                                scale: [0.9, 1.05, 1],
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-green-600 shadow-xl shadow-main/20"
                        >
                        <Check
                            size={90}
                            className="text-white"
                            strokeWidth={3}
                        />
                        </motion.div>

                        <motion.h1
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                        }}
                        className="mt-10 text-6xl font-black text-neutral-950"
                        >
                        Thank You
                        </motion.h1>

                        <motion.p
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.35,
                            duration: 0.5,
                        }}
                        className="text-lg text-neutral-500"
                        >
                        We have received your submission.
                        </motion.p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}