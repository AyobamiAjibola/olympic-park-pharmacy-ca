import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
        <Helmet>
            <title>About us | Olympic Park Pharmacy</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div>About Us</div>
          <Footer/>
        </div>
    </>
  )
}
