import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
     <>
        <Helmet>
          <title>404 | Olympic Park Pharmacy</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar/>
            <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
              <h1 className="mb-4 text-4xl font-bold">404</h1>
              <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
              <Button
                className="bg-main text-white mt-3 cursor-pointer"
                onClick={()=>navigate('/')}
              >
                Return to Home
              </Button>
            </main>
            <Footer/>
        </div>
    </>
  );
};

export default NotFound;