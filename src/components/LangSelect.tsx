import { Globe } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

type IProps = {
    lang: string;
    changeLanguage: (lang: string)=>void;
    isHome: boolean;
}

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "hi", label: "Hindu" },
  { code: "tl", label: "Tagalog" },
];

export default function LangSelect({changeLanguage, lang, isHome}: IProps) {
  return (
    <div className="relative flex items-center">
        <Globe className={`w-4 h-4 ${isHome ? 'text-white/80' : 'text-main'}`} />
        <span className={`absolute left-5 top-1/2
            -translate-y-1/2 pointer-events-none
            ${isHome ? 'text-white/90' : 'text-main'}`}
        >
            {lang.toUpperCase()}
        </span>
        
        <select
            value={lang}
            onChange={(e)=>changeLanguage(e.target.value)}
            className={`opacity-0 w-6 cursor-pointer`}
            >
            {languages.map((l,i) => (
                <option value={l.code} className="text-black" key={i}>
                    {l.label}
                </option>
            ))}
        </select>
        
        {/* <select
            value={lang}
            onChange={(e)=>changeLanguage(e.target.value)}
            className={`
                bg-transparent
                ${isHome ? 'text-white/90' : 'text-main'}
                text-xs
                outline-none
                border-none
                cursor-pointer
                font-medium
            `}
            >
            {languages.map((l,i) => (
                <option value={l.code} className="text-black" key={i}>
                    {l.label}
                </option>
            ))}
        </select> */}

        {/* <Select value={lang} onValueChange={changeLanguage}>
            <SelectTrigger
                className={`
                w-auto
                border-none
                shadow-none
                ${isHome ? "text-white/90" : "text-main"}
                `}
            >
                <SelectValue>
                {lang.toLowerCase()}
                </SelectValue>
            </SelectTrigger>

            <SelectContent>
                {languages.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select> */}
    </div>
  )
}
