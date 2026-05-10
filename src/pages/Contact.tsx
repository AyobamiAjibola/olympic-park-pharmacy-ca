import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
        <Helmet>
            <title>Contact | Olympic Park Pharmacy</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div>Contact</div>
          <Footer/>
        </div>
    </>
  )
}
