import { location, pharmPhone, province } from "@/constant/helper";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer className="bg-main text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-2xl p-1">
              <img
                src={logo}
                alt="Olympic Park Pharmacy logo"
                className="w-14 h-14 object-contain"
              />
            </div>

            <div>
              <span className="text-2xl font-extrabold text-left text-blue-100">Olympic Park Pharmacy</span>
              <p className="text-sm text-blue-100 text-left">
                {t("footer.text1")}
              </p>
            </div>
          </div>

          <p className="max-w-md text-blue-100 text-sm leading-6 text-left">
            {t("footer.text2")}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li><a onClick={()=>navigate('/')} className="hover:text-white">{t("Navigation.home")}</a></li>
            <li><a onClick={()=>navigate('/services')} className="hover:text-white">{t("Navigation.services")}</a></li>
            <li><a onClick={()=>navigate('/about')} className="hover:text-white">{t("Navigation.about")}</a></li>
            <li><a onClick={()=>navigate('/contact')} className="hover:text-white">{t("Navigation.contact")}</a></li>
            <li><a onClick={()=>navigate('/careers')} className="hover:text-white">{t("Navigation.career")}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li>{location}</li>
            <li>{province}</li>
            <li>
              <a href="tel:+10000000000" className="hover:text-white">
                {pharmPhone}
              </a>
            </li>
            <li>
              <a href="mailto:info@olympicparkpharmacy.com" className="hover:text-white">
                info@olympicparkpharmacy.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-100">
          <p>
            © {new Date().getFullYear()} Olympic Park Pharmacy. All rights reserved.
          </p>

          {/* <div className="flex gap-5">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}