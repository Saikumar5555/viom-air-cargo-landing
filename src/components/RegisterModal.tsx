import { X, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onBackToSignIn: () => void;
    onRegisterSuccess: () => void;
}

export default function RegisterModal({ isOpen, onClose, onBackToSignIn, onRegisterSuccess }: RegisterModalProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        city: "",
        defaultAirport: "",
        companyName: "",
        accountNumber: "",
        iataNumber: "",
        cassCode: "",
        mobileNumber: "",
        agreeToTerms: false,
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add actual registration logic here
        console.log("Registration:", formData);
        onRegisterSuccess();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-4xl bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="gradient-primary p-4 sm:p-6 text-primary-foreground flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button onClick={onBackToSignIn} className="hover:opacity-70 transition-opacity">
                                <ArrowLeft className="h-6 w-6" />
                            </button>
                            <h2 className="text-2xl font-bold">Register New User</h2>
                        </div>
                        <button onClick={onClose} className="hover:opacity-70 transition-opacity">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Form - Scrollable */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-grow">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter First Name"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter Last Name"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Company Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="IN">India</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="SG">Singapore</option>
                                <option value="CN">China</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                                City
                            </label>
                            <select
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            >
                                <option value="">Select City</option>
                                <option value="NYC">New York</option>
                                <option value="LON">London</option>
                                <option value="DEL">Delhi</option>
                                <option value="DXB">Dubai</option>
                                <option value="SIN">Singapore</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="defaultAirport" className="block text-sm font-medium text-foreground mb-2">
                                Default Airport
                            </label>
                            <input
                                id="defaultAirport"
                                name="defaultAirport"
                                type="text"
                                value={formData.defaultAirport}
                                onChange={handleChange}
                                placeholder="Enter Default Airport"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                                Company Name
                            </label>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Enter Company Name"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="accountNumber" className="block text-sm font-medium text-foreground mb-2">
                                Account Number
                            </label>
                            <input
                                id="accountNumber"
                                name="accountNumber"
                                type="text"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                placeholder="Enter Account Number"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="iataNumber" className="block text-sm font-medium text-foreground mb-2">
                                IATA Number
                            </label>
                            <input
                                id="iataNumber"
                                name="iataNumber"
                                type="text"
                                value={formData.iataNumber}
                                onChange={handleChange}
                                placeholder="Enter 7 digit IATA"
                                maxLength={7}
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="cassCode" className="block text-sm font-medium text-foreground mb-2">
                                CASS Code
                            </label>
                            <input
                                id="cassCode"
                                name="cassCode"
                                type="text"
                                value={formData.cassCode}
                                onChange={handleChange}
                                placeholder="Enter 4 digit CASS"
                                maxLength={4}
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-foreground mb-2">
                                Company Mobile Number
                            </label>
                            <input
                                id="mobileNumber"
                                name="mobileNumber"
                                type="tel"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                placeholder="Enter Mobile Number"
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="pt-4 border-t border-border">
                        <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                            Terms and Conditions
                        </h3>
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mt-1 rounded border-input"
                                required
                            />
                            <span className="text-sm text-muted-foreground">
                                By checking this box, I hereby agree to the{" "}
                                <a href="#terms" className="text-primary hover:underline font-medium">
                                    terms & conditions
                                </a>{" "}
                                and the{" "}
                                <a href="#privacy" className="text-primary hover:underline font-medium">
                                    privacy policy
                                </a>{" "}
                                of VIOM AIR Cargo.
                            </span>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => setFormData({
                                firstName: "",
                                lastName: "",
                                email: "",
                                country: "",
                                city: "",
                                defaultAirport: "",
                                companyName: "",
                                accountNumber: "",
                                iataNumber: "",
                                cassCode: "",
                                mobileNumber: "",
                                agreeToTerms: false,
                            })}
                            className="flex-1 py-3.5 rounded-lg border-2 font-bold text-sm uppercase tracking-wider transition-all"
                            style={{ borderColor: "#BA9684", color: "#BA9684" }}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-3.5 rounded-lg text-white font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: "#BA9684" }}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
