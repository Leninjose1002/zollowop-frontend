import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { getLocationFromCoordinates } from '../api';

const Location = () => {
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const fetchLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            console.log("📍 Coordinates:", latitude, longitude);

            try {
              const address = await getLocationFromCoordinates(latitude, longitude);

              // ✅ Use short display: sublocality, locality, state
              let locationName = [
                address?.sublocality,
                address?.locality,
                address?.state
              ]
                .filter(Boolean)
                .join(", ");

              // ⛳️ Fallback to trimmed formatted_address (first 3 parts)
              if (!locationName && address?.formatted_address) {
                const parts = address.formatted_address.split(",").slice(0, 3);
                locationName = parts.join(", ");
              }

              setLocation(locationName || "Unknown location");
            } catch (err) {
              console.error("❌ Location API error:", err);
              setLocation("Unable to fetch location");
            }
          },
          (err) => {
            console.warn("❌ Geolocation permission error:", err);
            setLocation("Permission denied");
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }
        );
      } else {
        setLocation("Geolocation not supported");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full 
    border border-blue-500 transition ml-20">
      <MapPin size={16} className="mr-1 text-blue-800" />
      <span>{location}</span>
    </div>
  );
};

export default Location;
