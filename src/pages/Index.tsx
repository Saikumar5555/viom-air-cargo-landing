import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingModal from "@/components/BookingModal";
import TrackShipmentModal from "@/components/TrackShipmentModal";
import SignInModal from "@/components/SignInModal";
import RegisterModal from "@/components/RegisterModal";
import ProductsSection from "@/components/ProductsSection";
import HelpCenter from "@/components/HelpCenter";
import Footer from "@/components/Footer";

import { toast } from "sonner";


import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check for query parameters to open modals
    const params = new URLSearchParams(window.location.search);
    if (params.get("signin") === "true") {
      setSignInOpen(true);
    } else if (params.get("register") === "true") {
      setRegisterOpen(true);
    }
  }, []);

  const handleBookNowClick = () => {
    if (isAuthenticated) {
      setBookingOpen(true);
    } else {
      setSignInOpen(true);
    }
  };

  const handleSignInSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    setSignInOpen(false);
    toast.success("Successfully signed in!");
    setBookingOpen(true);
  };

  const handleRegisterSuccess = () => {
    setRegisterOpen(false);
    toast.success("Registration successful! Please sign in.");
    setSignInOpen(true);
  };

  const handleRegisterClick = () => {
    setSignInOpen(false);
    setRegisterOpen(true);
  };

  const handleBackToSignIn = () => {
    setRegisterOpen(false);
    setSignInOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSignInClick={() => setSignInOpen(true)} />
      <HeroSection onBookNow={handleBookNowClick} onTrack={() => setTrackOpen(true)} />



      <ProductsSection />
      <ServicesSection />
      <DestinationsSection />
      <HelpCenter />
      <Footer />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <TrackShipmentModal
        open={trackOpen}
        onClose={() => setTrackOpen(false)}
        initialAwb={trackingNumber}
      />
      <SignInModal
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
        onRegisterClick={handleRegisterClick}
        onSignInSuccess={handleSignInSuccess}
      />
      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onBackToSignIn={handleBackToSignIn}
        onRegisterSuccess={handleRegisterSuccess}
      />
    </div>
  );
};

export default Index;
