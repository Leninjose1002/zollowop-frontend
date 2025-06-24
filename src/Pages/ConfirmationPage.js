import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const { state } = useLocation();
  const service = state?.service;

  if (!service) {
    return (
      <div className="text-center mt-10 text-gray-600">
        No booking information available.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed ✅</h1>

      {service.type === "nurse" ? (
        <>
          <p className="text-lg text-gray-800 mb-2">
            Thank you for requesting our <strong>nursing service</strong>.
          </p>
          <p className="text-gray-600 mb-4">
            Our team will contact you soon to schedule a home visit.
          </p>

          <div className="text-left bg-gray-50 p-4 rounded shadow-sm text-sm text-gray-700">
            {service.nurseType && (
              <p><strong>Requested Nurse Type:</strong> {service.nurseType}</p>
            )}
            {service.shift && (
              <p><strong>Preferred Shift:</strong> {service.shift}</p>
            )}
            {service.date && (
              <p><strong>Preferred Date & Time:</strong> {new Date(service.date).toLocaleString()}</p>
            )}
            {service.address && (
              <p><strong>Address:</strong> {service.address}</p>
            )}
            {service.phone && (
              <p><strong>Phone:</strong> {service.phone}</p>
            )}
            {service.notes && (
              <p><strong>Additional Notes:</strong> {service.notes}</p>
            )}
          </div>
        </>
      ) : service.type === "chef" ? (
        <>
          <p className="text-lg text-gray-800 mb-2">
            Thank you for requesting our <strong>chef service</strong>.
          </p>
          <p className="text-gray-600 mb-4">
            Our culinary team will get in touch with you soon.
          </p>

          <div className="text-left bg-gray-50 p-4 rounded shadow-sm text-sm text-gray-700 space-y-1">
            {service.name && <p><strong>Name:</strong> {service.name}</p>}
            {service.phone && <p><strong>Phone:</strong> {service.phone}</p>}
            {service.email && <p><strong>Email:</strong> {service.email}</p>}
            {service.street || service.city || service.state ? (
              <p>
                <strong>Address:</strong> {`${service.street || ""}, ${service.city || ""}, ${service.state || ""} - ${service.zip || ""}`}
              </p>
            ) : null}
            {service.date && (
              <p><strong>Event Date & Time:</strong> {new Date(service.date).toLocaleString()}</p>
            )}
            {service.guests && <p><strong>Guests:</strong> {service.guests}</p>}
            {service.category && <p><strong>Food Category:</strong> {service.category}</p>}
            {service.occasion && <p><strong>Occasion:</strong> {service.occasion}</p>}
            {service.cuisine && <p><strong>Cuisine:</strong> {service.cuisine}</p>}
            {service.utensils !== undefined && (
              <p><strong>Chef Bringing Utensils?:</strong> {service.utensils ? "Yes" : "No"}</p>
            )}
            {service.serviceType && <p><strong>Service Type:</strong> {service.serviceType}</p>}
            {service.notes && <p><strong>Additional Notes:</strong> {service.notes}</p>}
          </div>
        </>
      ) : (
        <>
          <p className="text-lg text-gray-800">
            Thank you for booking <strong>{service.name || service.title}</strong>.
          </p>
          <p className="mt-2 text-gray-600">
            We will get back to you soon.
          </p>
        </>
      )}
    </div>
  );
};

export default ConfirmationPage;
