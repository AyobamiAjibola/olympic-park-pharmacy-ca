import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
        <Helmet>
          <title>Contact Us | Olympic Park Pharmacy</title>
          <meta
            name="description"
            content="Contact Olympic Park Pharmacy for prescriptions, appointments, consultations, and healthcare inquiries."
          />

          <meta
            name="keywords"
            content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
          />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div>Contact</div>
          <Footer/>
        </div>
    </>
  )
}
