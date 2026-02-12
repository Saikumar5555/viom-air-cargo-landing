import { useState } from "react";
import { X, Search, Package } from "lucide-react";

interface TrackShipmentModalProps {
  open: boolean;
  onClose: () => void;
  initialAwb?: string;
}

export default function TrackShipmentModal({ open, onClose, initialAwb }: TrackShipmentModalProps) {
  const [awb, setAwb] = useState(initialAwb || "");
  const [searched, setSearched] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-card-hover overflow-hidden">
        <div className="gradient-primary p-6 text-primary-foreground">
          <button onClick={onClose} className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground">
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Package className="h-6 w-6" />
            <h2 className="text-xl font-bold">Track Your Shipment</h2>
          </div>
          <p className="text-sm text-primary-foreground/70">Enter your Air Waybill number to get live updates</p>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              AWB Number
            </label>
            <input
              value={awb}
              onChange={(e) => { setAwb(e.target.value); setSearched(false); }}
              placeholder="e.g. 176-12345678"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
          </div>
          <button
            onClick={() => awb.trim() && setSearched(true)}
            className="w-full py-3.5 rounded-lg gradient-gold text-accent-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Search className="h-4 w-4" /> Track
          </button>
          {searched && (
            <div className="text-center py-6 text-muted-foreground">
              <Package className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">No shipment found for "{awb}"</p>
              <p className="text-xs mt-1">Please check your AWB number and try again.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
