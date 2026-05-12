import { Globe } from "lucide-react";

type IProps = {
    lang: string;
    changeLanguage: (lang: string)=>void;
    isHome: boolean;
}

export default function LangSelect({changeLanguage, lang, isHome}: IProps) {
  return (
    <div className="flex items-center gap-1">
        <Globe className={`w-4 h-4 ${isHome ? 'text-white/80' : 'text-main'}`} />
        <select
            value={lang}
            onChange={(e)=>changeLanguage(e.target.value)}
            className={`
                bg-transparent
                ${isHome ? 'text-white/90' : 'text-main'}
                text-sm
                outline-none
                border-none
                cursor-pointer
                font-medium
            `}
            >
            <option value="en" className="text-black">
                En
            </option>

            <option value="fr" className="text-black">
                Fr
            </option>

            <option value="hi" className="text-black">
                hi
            </option>

            <option value="tl" className="text-black">
                Tl
            </option>
        </select>
    </div>
  )
}
