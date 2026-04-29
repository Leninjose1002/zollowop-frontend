// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import HowItWorks from "../components/HowItWorks";
// import Herosection from "../components/Herosection";
// import InfoSection from "../components/InfoSection";
// import Cta from "../components/Cta";
// import Introduction from "../components/Introduction";
// // import Reasons from "../components/Reasons";
// import NewAndNoteworthySlider from "../components/NewAndNoteworthySlider";
// import Testimonial from "../components/Testimonial";
// import CountingNumber from "../components/CountingNumber";
// import Cleaning from "../components/Cleaning";
// import HomePageSection from "../components/HomePageSection";

// // 🔁 Modals
// import UserLogin from "../components/UserLogin";
// import UserSignup from "../components/UserSignup";

// const Home = () => {
//   // const [data, setData] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const location = useLocation();

//   // ✅ Handle email verification modal logic
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const verified = params.get("verified");

//     if (verified === "true" || verified === "expired" || verified === "already") {
//       setShowLogin(true);
//       // ✅ Clean up the URL
//       const cleanUrl = window.location.pathname;
//       window.history.replaceState({}, "", cleanUrl);
//     }
//   }, [location]);

//   // // 📡 Fetch homepage data (optional, depends on your API)
//   // useEffect(() => {
//   //   axios
//   //     .get(`${process.env.REACT_APP_API_URL}/api/your-endpoint`)
//   //     .then((response) => setData(response.data))
//   //     .catch((error) => console.error("Error fetching data:", error));
//   // }, []);

//   return (
//     <div className="overflow-x-hidden relative">
//       {/* Modals */}
//       {showLogin && (
//         <UserLogin
//           onClose={() => setShowLogin(false)}
//           setShowLogin={setShowLogin}
//           setShowSignup={setShowSignup}
//         />
//       )}
//       {showSignup && (
//         <UserSignup
//           onClose={() => setShowSignup(false)}
//           setShowLogin={setShowLogin}
//         />
//       )}

//       {/* Page Sections */}
//       <Introduction />
//       <Herosection />
//       <InfoSection />
//       <HowItWorks />
//       <NewAndNoteworthySlider />
//       <Cleaning />
//       <CountingNumber />
//       <Testimonial />
//       <HomePageSection />
//       <Cta />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import Herosection from "../components/Herosection";
import Cta from "../components/Cta";
// import Reasons from "../components/Reasons";
import Services from "../components/InfoSection";
import Introduction from "../components/Introduction";

// 🔁 Modals
import UserLogin from "../components/UserLogin";
import UserSignup from "../components/UserSignup";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  // ✅ Handle email verification modal logic
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const verified = params.get("verified");

    if (verified === "true" || verified === "expired" || verified === "already") {
      setShowLogin(true);
      // ✅ Clean up the URL
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden relative">
      {/* Modals */}
      {showLogin && (
        <UserLogin
          onClose={() => setShowLogin(false)}
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />
      )}
      {showSignup && (
        <UserSignup
          onClose={() => setShowSignup(false)}
          setShowLogin={setShowLogin}
        />
      )}

      {/* ✅ MINIMALIST HOMEPAGE - 7 Sections Only */}
      
      {/* 1. Hero Section */}
      <Herosection />
      
      <Introduction /> 
      
      {/* 2. How It Works */}
      <HowItWorks />
      
      {/* 4. Services Carousel */}
      <Services />
      
      {/* 6. Call to Action */}
      <Cta />
    </div>
  );
};

export default Home;
