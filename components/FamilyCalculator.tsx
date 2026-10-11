"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/data/content";

export default function FamilyCalculator() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pkg, setPkg] = useState("Half-Day");
  const [hoursPool, setHoursPool] = useState(0);
  const [date, setDate] = useState("");

  const updateCount = (setter: any, val: number, min: number, max: number) => {
    setter((prev: number) => Math.min(Math.max(prev + val, min), max));
  };

  const calculateTotal = () => {
    if (pkg === "Full-Day") return "Call for pricing";
    
    let total = 0;
    const people = adults + children;
    
    if (pkg === "Half-Day") {
      total += people * 700;
    } else if (pkg === "Overnight") {
      total += 3990; // Base rate
    }

    if (pkg !== "Overnight" && hoursPool > 0) {
      total += people * 200 * hoursPool;
    }

    return `${total.toLocaleString()} tk`;
  };

  const handleBook = () => {
    const msg = `Hi TreeTop! I want to book for ${adults} adults${children > 0 ? ` and ${children} children` : ''}, ${pkg} package on ${date || 'a future date'}. Can you confirm availability?`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <div className="bg-forest-light p-8 rounded-2xl max-w-2xl mx-auto text-cream relative z-10 border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Steppers */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Adults</span>
            <div className="flex items-center space-x-4 bg-forest-mid rounded-full px-4 py-2">
              <button onClick={() => updateCount(setAdults, -1, 1, 20)} className="text-amber text-xl px-2">-</button>
              <span className="w-4 text-center">{adults}</span>
              <button onClick={() => updateCount(setAdults, 1, 1, 20)} className="text-amber text-xl px-2">+</button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Children</span>
            <div className="flex items-center space-x-4 bg-forest-mid rounded-full px-4 py-2">
              <button onClick={() => updateCount(setChildren, -1, 0, 20)} className="text-amber text-xl px-2">-</button>
              <span className="w-4 text-center">{children}</span>
              <button onClick={() => updateCount(setChildren, 1, 0, 20)} className="text-amber text-xl px-2">+</button>
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium mb-2">Date (Optional)</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              className="bg-forest-mid text-cream rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-amber"
            />
          </div>
        </div>

        {/* Options */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="font-medium mb-2">Package</span>
            <select 
              value={pkg} 
              onChange={(e) => setPkg(e.target.value)}
              className="bg-forest-mid text-cream rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-amber appearance-none"
            >
              <option value="Half-Day">Half-Day (700tk)</option>
              <option value="Full-Day">Full-Day (Call)</option>
              <option value="Overnight">Overnight (From 3,990tk)</option>
            </select>
          </div>

          {pkg !== "Overnight" && (
            <div className="flex items-center justify-between">
              <span className="font-medium">Pool Add-on (hrs)</span>
              <div className="flex items-center space-x-4 bg-forest-mid rounded-full px-4 py-2">
                <button onClick={() => updateCount(setHoursPool, -1, 0, 8)} className="text-amber text-xl px-2">-</button>
                <span className="w-4 text-center">{hoursPool}</span>
                <button onClick={() => updateCount(setHoursPool, 1, 0, 8)} className="text-amber text-xl px-2">+</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <div className="mb-2">
          <span className="text-sage text-sm uppercase tracking-widest">Estimated Total</span>
        </div>
        <div className="font-playfair text-4xl text-amber mb-2">
          {calculateTotal()}
        </div>
        {pkg === "Overnight" && (
          <p className="text-sm text-sage mb-6">Price per room, not per person</p>
        )}
        <div className={pkg !== "Overnight" ? "mb-6" : ""}></div>
        
        <button onClick={handleBook} className="btn-primary w-full md:w-auto">
          WhatsApp this booking
        </button>
      </div>
    </div>
  );
}
