import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper/modules";
import { services } from "@/constant/helper";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <>
        <Helmet>
          <title>Services | Olympic Park Pharmacy</title>
          <meta
            name="description"
            content="Explore prescription refills, medication reviews, consultations, and pharmacy services at Olympic Park Pharmacy."
          />

          <meta
            name="keywords"
            content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
          />
        </Helmet>
        
        <div className="min-h-screen bg-background">
          <main>
            <Navbar />
            <section className="pb-10 lg:px-12 px-5 md:px-8 w-full bg-slate-50 ">
              <div className="flex flex-col justify-center items-center pt-15">
                <span className="inline-block text-3xl md:text-6xl font-bold text-main">
                  Our Services
                </span>
                <span className="inline-block text-sm md:text-lg font-normal text-slate-600">
                  Helpful pharmacy services designed around your health needs.
                </span>

                <img
                  src={logo}
                  alt="Olympic Park Pharmacy logo"
                  className="w-50 h-50 object-contain"
                />
              </div>

              <section className="">
                <div className="mx-auto max-w-7xl">
                  <div className='md:hidden'>
                    <Swiper
                      spaceBetween={24}
                      slidesPerView={1}
                      keyboard={{ enabled: true }}
                      navigation
                      modules={[Navigation, Keyboard]}
                      className="w-full pb-12 [&_.swiper-slide]:h-auto [&_.swiper-slide]:flex mt-10"
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 24,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 28,
                        },
                      }}
                    >
                      {services.map((service, index) => (
                        <SwiperSlide key={service.title} className="h-auto mb-12">
                          <ServiceCard isServicePage={true} index={index} {...service} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="hidden md:grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
                    {services.map((service, index) => (
                      <ServiceCard
                        key={service.title}
                        isServicePage={true}
                        index={index}
                        {...service}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </section>
          </main>
          <Footer/>
        </div>
    </>
  )
}
