import { X } from "lucide-react";
import { useState } from "react";

interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegisterClick: () => void;
    onSignInSuccess: () => void;
}

export default function SignInModal({ isOpen, onClose, onRegisterClick, onSignInSuccess }: SignInModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add actual authentication logic here
        console.log("Sign in:", { email, password });
        onSignInSuccess();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-card rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="gradient-primary p-6 text-primary-foreground">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Sign In</h2>
                        <button onClick={onClose} className="hover:opacity-70 transition-opacity">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <p className="text-primary-foreground/80 text-sm mt-1">Welcome back to VIOM AIR</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-input" />
                            <span className="text-muted-foreground">Remember me</span>
                        </label>
                        <a href="#forgot" className="text-primary hover:underline font-medium">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 rounded-lg gradient-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Sign In
                    </button>

                    <div className="text-center pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={onRegisterClick}
                                className="text-primary font-semibold hover:underline"
                            >
                                Register Now
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
