import { useState } from "react";
import { X, FileText, Send } from "lucide-react";
import { toast } from "sonner";

interface QuoteModalProps {
    open: boolean;
    onClose: () => void;
}

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Charter",
        message: "",
    });

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote inquiry:", formData);
        toast.success("Thank you! Your quote request has been submitted. Our team will contact you shortly.");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-card rounded-2xl shadow-card-hover overflow-hidden">
                <div className="gradient-primary p-6 text-primary-foreground">
                    <button onClick={onClose} className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground">
                        <X className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <FileText className="h-6 w-6" />
                        <h2 className="text-xl font-bold">Get a Quote</h2>
                    </div>
                    <p className="text-sm text-primary-foreground/70">Fill out the form below to receive a personalized quote.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Full Name
                        </label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="email@example.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Service Interested In
                        </label>
                        <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        >
                            <option value="Charter">Charter</option>
                            <option value="Health Care">Health Care</option>
                            <option value="Air Freight">Air Freight</option>
                            <option value="Fresh">Fresh</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Message / Details
                        </label>
                        <textarea
                            required
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your shipment..."
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg gradient-gold text-accent-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
                    >
                        <Send className="h-4 w-4" /> Request Quote
                    </button>
                </form>
            </div>
        </div>
    );
}
