import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const Location = ({ onLocationChange }) => {
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const fetchLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            console.log("📍 Coordinates:", latitude, longitude);

            try {
              // ✅ Use free Nominatim API (OpenStreetMap) - no backend needed!
              const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                {
    headers: {
      'User-Agent': 'ZollowupApp' // ← ADD THIS
    }
  }
              );
              const data = await res.json();
              
              // Get city name
              const city = data.address?.city || 
                          data.address?.town || 
                          data.address?.village || 
                          "Unknown";
              
              setLocation(city);
              
              // ✅ Pass city to parent form
              if (onLocationChange) {
                onLocationChange(city);
              }
            } catch (err) {
              console.warn("⚠️ Location API error (non-blocking):", err);
              setLocation("Enter city manually");
              // Don't throw - let form submission continue
            }
          },
          (err) => {
            console.warn("⚠️ Geolocation permission denied:", err);
            setLocation("Enter city manually");
          }
        );
      } else {
        setLocation("Enter city manually");
      }
    };

    fetchLocation();
  }, [onLocationChange]);

  return (
    <div className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full 
    border border-blue-500 transition ml-20">
      <MapPin size={16} className="mr-1 text-blue-800" />
      <span>{location}</span>
    </div>
  );
};

export default Location;