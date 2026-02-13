import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignInModal from "@/components/SignInModal";
import RegisterModal from "@/components/RegisterModal";
import { toast } from "sonner";
import { Plane, Info, Package, Maximize2, Weight, DoorOpen } from "lucide-react";
import viomHero from "../assets/images/ViomHero.png";
import viomAir320 from "../assets/images/viomair320.png";
import boeingImg from "../assets/images/boeing.jpg";
import fleetImg from "../assets/images/fleet.png";

const fleetData = [
    {
        id: "b737-800bcf",
        name: "Boeing 737-800 Freighter",
        image: boeingImg,
        specs: {
            currentFleet: "29 Boeing 737-800 Freighters",
            mainDeck: "12 pallet positions (11 standard 88\" x 125\" pallets + 1 contoured pallet)",
            forwardHold: "19.3 m³ bulk cargo",
            aftHold: "24.7 m³ bulk cargo",
            doorSizes: [
                { desc: "Main deck", inches: "141\" x 86\"", cm: "358 cm x 218 cm" },
                { desc: "Forward hold", inches: "48\" x 35\"", cm: "122 cm x 89 cm" },
                { desc: "Aft hold", inches: "48\" x 35\"", cm: "122 cm x 89 cm" }
            ],
            tonnage: "23,900 kg",
            volume: "185.4 m³",
            height: "Main deck height: 86\" (218 cm), Lower deck height: 35\" (89 cm)"
        }
    },
    {
        id: "a320p2f",
        name: "Airbus A320P2F",
        image: viomAir320,
        specs: {
            currentFleet: "1 Airbus A320P2F",
            mainDeck: "10 ULD positions + 1 pallet position",
            forwardHold: "3 ULD positions or bulk cargo",
            aftHold: "4 ULD positions or bulk cargo",
            doorSizes: [
                { desc: "Main deck", inches: "142\" x 85\"", cm: "360 cm x 216 cm" },
                { desc: "Forward hold", inches: "72\" x 70\"", cm: "182 cm x 177 cm" },
                { desc: "Aft hold", inches: "72\" x 70\"", cm: "182 cm x 177 cm" },
                { desc: "Bulk", inches: "37\" x 30\"", cm: "95 cm x 77 cm" }
            ],
            tonnage: "21,400 kg",
            volume: "159 m³",
            height: "Main deck height: 82\" (208 cm), Lower deck height: 45\" (114 cm)"
        }
    }
];

export default function Fleet() {
    const [signInOpen, setSignInOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAuthenticated") === "true";
    });
    const [selectedAircraft, setSelectedAircraft] = useState(fleetData[0]); // Default to Boeing

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSignInSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        setSignInOpen(false);
        toast.success("Successfully signed in!");
    };

    const handleRegisterSuccess = () => {
        setRegisterOpen(false);
        toast.success("Registration successful! Please sign in.");
        setSignInOpen(true);
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar onSignInClick={() => setSignInOpen(true)} />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[30vh] sm:h-[40vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={fleetImg}
                            alt="Fleet Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-xl sm:text-3xl md:text-6xl font-light text-white mb-2 sm:mb-6 tracking-tight animate-fade-up">
                            The cargo airline you <br />
                            <span className="font-medium italic text-accent">can rely on</span>
                        </h1>
                    </div>
                </section>

                {/* Aircraft Gallery */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-light text-primary">Our Fleet</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {fleetData.map((aircraft) => (
                                <div
                                    key={aircraft.id}
                                    onClick={() => aircraft.specs.currentFleet && setSelectedAircraft(aircraft)}
                                    className={`group relative overflow-hidden rounded-xl shadow-card transition-all duration-300 cursor-pointer ${selectedAircraft.id === aircraft.id ? 'ring-2 ring-accent' : 'hover:shadow-card-hover'
                                        }`}
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={aircraft.image}
                                            alt={aircraft.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-medium text-lg leading-tight">
                                            {aircraft.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Aircraft Breakdown Section */}
                {selectedAircraft.specs.currentFleet && (
                    <section className="py-12 lg:py-20 bg-white">
                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                                {/* Visual Comparison / Image */}
                                <div className="lg:col-span-2 space-y-6 lg:space-y-8 animate-fade-up">
                                    <div className="text-center">
                                        <h2 className="text-2xl lg:text-3xl font-light text-primary mb-6 lg:mb-8">{selectedAircraft.name}</h2>
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted/10 p-4 border border-border/50">
                                            <img
                                                src={selectedAircraft.image}
                                                alt={selectedAircraft.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                        <div className="p-4 lg:p-6 rounded-xl bg-muted/50 border border-border">
                                            <Weight className="h-5 w-5 lg:h-6 lg:w-6 text-accent mb-2 lg:mb-3" />
                                            <p className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Payload</p>
                                            <p className="text-lg lg:text-xl font-semibold text-primary">{selectedAircraft.specs.tonnage}</p>
                                        </div>
                                        <div className="p-4 lg:p-6 rounded-xl bg-muted/50 border border-border">
                                            <Maximize2 className="h-5 w-5 lg:h-6 lg:w-6 text-accent mb-2 lg:mb-3" />
                                            <p className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Volume</p>
                                            <p className="text-lg lg:text-xl font-semibold text-primary">{selectedAircraft.specs.volume}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="lg:col-span-3">
                                    <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
                                        <table className="w-full text-left border-collapse min-w-[300px]">
                                            <tbody className="divide-y divide-border">
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary w-1/3">Current Fleet</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80">{selectedAircraft.specs.currentFleet}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary">Main Deck</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80 leading-relaxed">{selectedAircraft.specs.mainDeck}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary">Forward hold</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80">{selectedAircraft.specs.forwardHold}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary">Aft hold</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80">{selectedAircraft.specs.aftHold}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary align-top">Door sizes</th>
                                                    <td className="py-0 px-0">
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full border-collapse">
                                                                <thead>
                                                                    <tr className="border-b border-border/50">
                                                                        <th className="py-2 px-4 lg:py-3 lg:px-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Description</th>
                                                                        <th className="py-2 px-4 lg:py-3 lg:px-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Inches</th>
                                                                        <th className="py-2 px-4 lg:py-3 lg:px-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Centimeters</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-border/50">
                                                                    {selectedAircraft.specs.doorSizes?.map((door, idx) => (
                                                                        <tr key={idx}>
                                                                            <td className="py-2 px-4 lg:py-3 lg:px-6 text-xs font-medium text-primary whitespace-nowrap">{door.desc}</td>
                                                                            <td className="py-2 px-4 lg:py-3 lg:px-6 text-xs text-primary/70 whitespace-nowrap">{door.inches}</td>
                                                                            <td className="py-2 px-4 lg:py-3 lg:px-6 text-xs text-primary/70 whitespace-nowrap">{door.cm}</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary">Cargo tonnage</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80 font-medium">{selectedAircraft.specs.tonnage}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary">Cargo Volume</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80 font-medium">{selectedAircraft.specs.volume}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-4 px-4 lg:py-5 lg:px-6 bg-muted/30 text-xs lg:text-sm font-semibold text-primary">Maximum permitted height</th>
                                                    <td className="py-4 px-4 lg:py-5 lg:px-6 text-xs lg:text-sm text-primary/80 italic">{selectedAircraft.specs.height}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />

            <SignInModal
                isOpen={signInOpen}
                onClose={() => setSignInOpen(false)}
                onRegisterClick={() => {
                    setSignInOpen(false);
                    setRegisterOpen(true);
                }}
                onSignInSuccess={handleSignInSuccess}
            />
            <RegisterModal
                isOpen={registerOpen}
                onClose={() => setRegisterOpen(false)}
                onBackToSignIn={() => {
                    setRegisterOpen(false);
                    setSignInOpen(true);
                }}
                onRegisterSuccess={handleRegisterSuccess}
            />
        </div>
    );
}
