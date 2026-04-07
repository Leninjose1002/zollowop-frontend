import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20 px-4 md:px-16 overflow-hidden">
      {/* Floating Icons */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
  {[FaBroom, FaUserNurse, FaBolt, FaTools, FaUtensils].map((Icon, i) => (
    <motion.div
      key={i}
      className="absolute text-blue-400 opacity-30 text-5xl"
      style={{
        top: `${10 + i * 15}%`,
        left: `${i * 10 + 10}%`,
        
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 6 + i, ease: 'easeInOut' }}
    >
      <Icon />
    </motion.div>
  ))}
</div> */}


      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text font-heading">
            Your Home’s Best Friend — Zollowup
          </h2>
          <p className="mt-3 text-lg text-accent font-roboto font-bold">
            Our professional team  can take care of all your household work – we are just one click away.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Images Section */}
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            {[
              "https://img.freepik.com/free-photo/full-length-photo-smiling-brunette-maid-uniform-rubber-gloves-leaned-mop-while-standing_171337-18576.jpg",
              "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg",
              "https://img.freepik.com/free-photo/young-female-nurse-uniform-cleaning-home_1303-26768.jpg",
              "https://img.freepik.com/free-photo/housewife-woking-home-lady-blue-shirt-woman-clean-mirror_1157-45532.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`rounded-xl overflow-hidden shadow-md ${index === 0 ? 'row-span-2 h-[300px]' : 'h-[145px]'
                  }`}
              >
                <img
                  src={src}
                  alt="service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full px-2">
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text font-heading leading-snug">
                Expert Help Exactly  When<br />
                <span className="italic text-accent">  You Need It..</span>
              </h3>

            </motion.div>

            {[
              "Zollowup connects you with trained, background-verified professionals for all your needs — maids, caregivers, electricians, cooks, and more.",
              "No more browsing endless listings. Just book, relax, and let our team handle the rest with professionalism and care.",
              "Whether it's a one-time fix or regular service, Zollowup is your trusted home partner, delivering smiles with every visit.",
            ].map((para, idx) => (
              <motion.p
                key={idx}
                className="text-gray-700 mb-4 text-base leading-relaxed font-roboto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.2 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4 mt-6 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="bg-white shadow rounded-full px-4 py-2 text-sm text-gray-700 font-semibold">
                ⭐ 4.9/5 Rating
              </div>
              <div className="bg-white shadow rounded-full px-4 py-2 text-sm text-gray-700 font-semibold">
                🏠 Trusted by 1K+ Homes
              </div>
              <div className="bg-white shadow rounded-full px-4 py-2 text-sm text-gray-700 font-semibold">
                ✅ Google Verified
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <PrimaryButton label="Book Now" onClick={() => navigate('/contact')} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
