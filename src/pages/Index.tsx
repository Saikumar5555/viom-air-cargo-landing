import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingModal from "@/components/BookingModal";
import TrackShipmentModal from "@/components/TrackShipmentModal";
import ProductsSection from "@/components/ProductsSection";
import HelpCenter from "@/components/HelpCenter";
import Footer from "@/components/Footer";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onBookNow={() => setBookingOpen(true)} onTrack={() => setTrackOpen(true)} />
      <ProductsSection />
      <HelpCenter />
      <Footer />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <TrackShipmentModal open={trackOpen} onClose={() => setTrackOpen(false)} />
    </div>
  );
};

export default Index;
