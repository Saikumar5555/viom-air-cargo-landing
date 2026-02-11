import { useState } from "react";
import { X, Calendar, Search, Download, Plane } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const airports = [
  { city: "Chennai", code: "MAA" },
  { city: "Abu Dhabi", code: "AUH" },
  { city: "Dubai", code: "DXB" },
  { city: "Mumbai", code: "BOM" },
  { city: "Delhi", code: "DEL" },
  { city: "London", code: "LHR" },
  { city: "Singapore", code: "SIN" },
  { city: "Frankfurt", code: "FRA" },
  { city: "Hong Kong", code: "HKG" },
  { city: "New York", code: "JFK" },
];

type Tab = "flights" | "schedules";
type Filter = "all" | "passenger" | "freighters" | "trucks";

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [tab, setTab] = useState<Tab>("flights");
  const [filter, setFilter] = useState<Filter>("all");
  const [departing, setDeparting] = useState("");
  const [arriving, setArriving] = useState("");
  const [date, setDate] = useState<Date>();
  const [searched, setSearched] = useState(false);
  const [showDepSuggestions, setShowDepSuggestions] = useState(false);
  const [showArrSuggestions, setShowArrSuggestions] = useState(false);

  if (!open) return null;

  const filteredDep = airports.filter(
    (a) =>
      a.city.toLowerCase().includes(departing.toLowerCase()) ||
      a.code.toLowerCase().includes(departing.toLowerCase())
  );
  const filteredArr = airports.filter(
    (a) =>
      a.city.toLowerCase().includes(arriving.toLowerCase()) ||
      a.code.toLowerCase().includes(arriving.toLowerCase())
  );

  const handleSearch = () => setSearched(true);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-card rounded-2xl shadow-card-hover overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="gradient-primary p-4 sm:p-6 text-primary-foreground">
          <button onClick={onClose} className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground">
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Plane className="h-6 w-6" />
            <h2 className="text-xl font-bold">Flight Schedule</h2>
          </div>
          <p className="text-sm text-primary-foreground/70">Search for available cargo flights and schedules</p>
          <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <Download className="h-4 w-4" /> Download our schedule
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {/* Tabs */}
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            {(["flights", "schedules"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "flex-1 py-2.5 text-sm font-semibold rounded-md capitalize transition-all",
                  tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {(["all", "passenger", "freighters", "trucks"] as Filter[]).map((f) => (
              <label key={f} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="filter"
                  checked={filter === f}
                  onChange={() => setFilter(f)}
                  className="accent-secondary w-4 h-4"
                />
                <span className="text-sm font-medium capitalize text-foreground">
                  {f === "all" ? "All" : f === "passenger" ? "Passenger Only" : f === "freighters" ? "Freighters Only" : "Trucks Only"}
                </span>
              </label>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Departing */}
            <div className="relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Departing</label>
              <input
                value={departing}
                onChange={(e) => { setDeparting(e.target.value); setShowDepSuggestions(true); setSearched(false); }}
                onFocus={() => setShowDepSuggestions(true)}
                onBlur={() => setTimeout(() => setShowDepSuggestions(false), 150)}
                placeholder="City or Airport Code"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              {showDepSuggestions && departing && filteredDep.length > 0 && (
                <div className="absolute z-10 top-full mt-1 w-full bg-card border border-border rounded-lg shadow-card-hover max-h-40 overflow-y-auto">
                  {filteredDep.map((a) => (
                    <button key={a.code} onClick={() => { setDeparting(`${a.city}, ${a.code}`); setShowDepSuggestions(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                      {a.city} ({a.code})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Arriving */}
            <div className="relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Arriving</label>
              <input
                value={arriving}
                onChange={(e) => { setArriving(e.target.value); setShowArrSuggestions(true); setSearched(false); }}
                onFocus={() => setShowArrSuggestions(true)}
                onBlur={() => setTimeout(() => setShowArrSuggestions(false), 150)}
                placeholder="City or Airport Code"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              {showArrSuggestions && arriving && filteredArr.length > 0 && (
                <div className="absolute z-10 top-full mt-1 w-full bg-card border border-border rounded-lg shadow-card-hover max-h-40 overflow-y-auto">
                  {filteredArr.map((a) => (
                    <button key={a.code} onClick={() => { setArriving(`${a.city}, ${a.code}`); setShowArrSuggestions(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                      {a.city} ({a.code})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Date picker */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Flight Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <button className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-background text-sm text-left",
                  !date && "text-muted-foreground"
                )}>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {date ? format(date, "PPP") : "Select a date"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-[110]" align="start">
                <CalendarUI
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                  disabled={(d) => d < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="w-full py-3.5 rounded-lg gradient-gold text-accent-foreground font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Search className="h-4 w-4" /> Search
          </button>

          {/* Results */}
          {searched && (
            <div className="text-center py-8 text-muted-foreground">
              <Plane className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">No search results found.</p>
              <p className="text-xs mt-1">Please refine your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
