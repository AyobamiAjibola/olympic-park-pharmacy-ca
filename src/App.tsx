import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "./components/ui/toaster.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import Career from "./pages/Career.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Complaint from "./pages/Complaint.tsx";
import License from "./pages/PharmacyLicence.tsx";
import Team from "./pages/Team.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";

import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

function CanonicalPage() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  return (
    <>
      <link rel="canonical" href={"https://www.olympicparkpharmacy.ca" + path} />
      <Outlet />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<CanonicalPage />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/prescription-delivery" element={<ServiceDetail page="DeliveryPage" />} />
            <Route path="/services/travel-vaccines" element={<ServiceDetail page="TravelPage" />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/license" element={<License />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;