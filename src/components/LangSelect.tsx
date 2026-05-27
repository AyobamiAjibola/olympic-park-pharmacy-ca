import { Globe } from "lucide-react";

type IProps = {
    lang: string;
    changeLanguage: (lang: string)=>void;
    isHome: boolean;
}

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "hi", label: "Hindi" },
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
    </div>
  )
}
