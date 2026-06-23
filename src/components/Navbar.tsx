import { useState } from "react";
import { ArrowDown, ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSelect from "./LangSelect";
import { BOOKING_LINK } from "@/constant/helper";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation();
  const { t, i18n } = useTranslation();
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const links = [
    { to: "/", label: t("Navigation.home")},
    { to: "/services", label: t("Navigation.services")},
    { 
      label: t("Navigation.about"), 
      children: [
        { label: "Our Story", to: "/about" },
        { label: "Our Team", to: "/team" }
      ],
    },
    { to: "/contact", label: t("Navigation.contact")},
    { to: "/license", label: t("Navigation.license")},
    { to: "/complaint", label: t("Navigation.complaint")},
    { to: "/careers", label: t("Navigation.career")}
  ];

  const isHome = pathname === '/';

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md ${pathname === '/' ? '' : 'border-b border-grey-border bg-background/80'}`}>
      <nav className="flex h-20 max-w-7xl px-5 md:px-8 mx-auto items-center justify-between lg:px-10">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Olympic Park Pharmacy logo"
            className="w-20 h-20 md:w-10 md:h-10 lg:w-20 lg:h-20 object-contain"
          />

          <div className="leading-tight md:hidden lg:block">
            <p className={`text-xl md:text-lg font-bold ${pathname === '/' ? 'text-white' : 'text-main'}`}>
              Olympic Park
            </p>
            <p className={`text-[16px] font-medium ${pathname === '/' ? 'text-accent-grey' : 'text-slate-500' }`}>
              Pharmacy
            </p>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          <ul className="items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.to} className="relative group">
                {
                  l.children ? (
                    <>
                      <button
                        className={`flex items-end text-base cursor-pointer font-light transition-colors ${
                          pathname === "/about" || pathname === "/team"
                            ? "text-main font-medium"
                            : pathname === "/"
                            ? "hover:text-accent-grey text-accent-grey"
                            : "hover:text-main-light text-muted-foreground"
                        } font-light`}
                      >
                        {l.label}
                        <ChevronDown size={24}/>
                      </button>
                      <ul className={`absolute hidden w-28 group-hover:block ${pathname === '/' ? 'bg-black/40' : 'bg-white'} shadow-lg rounded-1xl`}>
                        {l.children.map((child) => (
                          <li key={child.to}
                            className={`py-2 ${child.to === '/about' && 'border-b border-b-neutral-300'}`}
                          >
                            <NavLink 
                              to={child.to}
                              end={l.to === "/"}
                              className={`text-[16px] font-medium transition-colors ${pathname === '/' ? 'hover:text-accent-grey text-accent-grey' : 'hover:text-main-light text-muted-foreground'} font-medium`}
                              activeClassName={`${pathname === '/' ? 'text-white' : 'text-main'} font-semibold`}
                            >{child.label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={`text-base font-medium transition-colors ${pathname === '/' ? 'hover:text-accent-grey text-accent-grey' : 'hover:text-main-light text-muted-foreground'} font-light`}
                      activeClassName={`${pathname === '/' ? 'text-white' : 'text-main'} font-semibold`}
                    >
                      {l.label}
                    </NavLink>
                  )
                }
              </li>
            ))}
          </ul>

          <Button 
            className="h-8 px-3 py-2.5 bg-main text-white font-semibold shadow-md hover:bg-main-light transition cursor-pointer"
            onClick={() =>
              window.open(BOOKING_LINK, "_blank")
            }
          >
            Book Now
          </Button>

          <LangSelect 
            changeLanguage={changeLanguage}
            lang={i18n.language}
            isHome={isHome}
          />
        </div>

        
        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className={`h-6 w-6 ${pathname === '/' ? 'text-white' : 'text-main'}`} /> : <Menu className={`h-6 w-6 ${pathname === '/' ? 'text-white' : 'text-main'}`} />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden md:hidden transition-[max-height] duration-300",
          open ? "h-screen" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.to} className="relative group">
              {
                l.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === l.label ? null : l.label
                        )
                      }
                      className={`text-xl flex items-center justify-between w-full font-light transition-colors ${
                        pathname === "/about" || pathname === "/team"
                          ? "text-main font-medium"
                          : pathname === "/"
                          ? "hover:text-accent-grey text-accent-grey"
                          : "hover:text-main-light text-muted-foreground"
                      } font-light`}
                    >
                      <div/>
                      <span className="ml-6">{l.label}</span>
                      {!openMobileDropdown ? <ArrowDown size={20}/> : <ArrowUp size={20}/>}
                    </button>
                    {openMobileDropdown === l.label && (
                      <ul className="mt-2 space-y-1 bg-black/10 rounded-sm">
                        {l.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              onClick={() => {
                                setOpen(false);
                                setOpenMobileDropdown(null);
                              }}
                              className={`block px-3 py-2 text-[16px] ${
                                pathname === child.to
                                  ? " text-main font-semibold"
                                  : "text-muted-foreground hover:text-main-light"
                              }`}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-lg font-medium ${pathname === '/' ? 'hover:text-white text-white font-light' : 'hover:text-main-light text-muted-foreground'} hover:bg-accent-grey`}
                    activeClassName={`bg-accent-grey text-main text-bold`}
                  >
                    {l.label}
                  </NavLink>
                )
              }
            </li>
          ))}
          <li className="pt-2">
            <Button className="py-6 w-full bg-main" size="lg" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
          </li>
        </ul>
        <div className="flex justify-center items-center my-6">
          <LangSelect 
            changeLanguage={changeLanguage}
            lang={i18n.language}
            isHome={isHome}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
