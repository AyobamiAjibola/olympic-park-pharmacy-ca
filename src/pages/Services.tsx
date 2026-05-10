import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
        <Helmet>
            <title>Services | Olympic Park Pharmacy</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div>Services</div>
          <Footer/>
        </div>
    </>
  )
}
