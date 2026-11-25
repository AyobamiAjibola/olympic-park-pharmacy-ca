import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { 
    Pill,
    ShieldCheck,
    Truck,
    Stethoscope,
    Activity,
    PackageCheck,
    BriefcaseMedical,
    Plane,
    TestTube,
    Syringe
 } from "lucide-react";

export type ServiceProp = {
  index: number;
  title: string;
  desc: string;
  short_desc: string;
  isServicePage?: boolean;
  link?: string;
}

const servicesIcons =[
   <Pill size={22} />,
   <ShieldCheck size={22} />,
   <Truck size={22} />,
   <Stethoscope size={22} />,
   <Activity size={22} />,
   <PackageCheck size={22} />,
   <BriefcaseMedical size={22} />,
   <Plane size={22} />,
   <TestTube size={22} />,
   <Syringe size={22} />
]

export default function ServiceCard({ isServicePage=false, index, title, short_desc, desc, link }: ServiceProp) {
    const { t } = useTranslation();
    const [isService, setIsService] = useState<boolean>(false);
    
    const fullPageLink = link && (
        <Link to={link} className="mt-4 text-sm font-medium text-main underline underline-offset-4">
            {t("HomePage.services.learnMore")}
        </Link>
    );

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="h-full"
            >
                <div className={`group flex h-full min-h-65 flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 ${isServicePage ? 'hover:-translate-y-2 hover:shadow-xl' : ''}`}>
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition ${isServicePage && 'group-hover:bg-emerald-600 group-hover:text-white'}`}>
                        {servicesIcons[index]}
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 text-left">
                        {title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 text-left">
                        {isServicePage ? `${desc.slice(0, 200)}...` : short_desc}
                    </p>

                    {fullPageLink}

                    {isServicePage && 
                        <Button 
                            onClick={()=>setIsService(true)}
                            className="mt-6 bg-transparent text-main border border-main py-6 px-4 hover:bg-main hover:text-white cursor-pointer"
                        >
                            Read More
                        </Button>
                    }
                </div>
            </motion.div>

            <Dialog open={isService} onOpenChange={setIsService}>
                <DialogContent className="p-7 max-w-sm md:max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle >
                            <span className="text-2xl font-semibold text-main">{title}</span>
                        </DialogTitle>
                        <DialogDescription className="text-base text-black/70">
                            {desc}
                        </DialogDescription>
                    </DialogHeader>
                    {fullPageLink}
                </DialogContent>
            </Dialog>
        </>
    );
};

