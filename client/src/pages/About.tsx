import { FaInstagram, FaStar, FaHandshake } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#1a1a1a] px-5 md:px-10 py-20">
      <motion.div
        style={{ y, opacity }}
        className="text-center mb-20 max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white shrikhand-regular"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
        >
          Connecting brands with the right voices, the right faces, and the
          right audience.
        </motion.p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700 mb-16 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We specialize in bridging the gap between brands and influential
                personalities. Our mission is to create impactful collaborations
                that drive growth, visibility, and engagement — ensuring every
                connection leaves a lasting impression.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With an extensive network of influencers, celebrities, and public
                figures across various industries, we make sure your brand resonates
                with the right audience, making every campaign not just memorable,
                but result-driven.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="w-64 h-48 bg-gradient-to-br from-violet-500/20 to-yellow-500/20 rounded-2xl border border-violet-500/30 flex items-center justify-center">
                  <span className="text-xl md:text-2xl text-white font-medium text-center px-6 italic">
                    "Your brand's growth is our mission"
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-violet-400"
              >
                <FaInstagram size={20} className="text-black" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                Influencer Network
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Wide influencer network across multiple industries with authentic creators who align with your brand values.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-lg bg-gradient-to-r from-violet-400 to-blue-400"
              >
                <FaStar size={20} className="text-white" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                Celebrity Booking
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium celebrity partnerships for high-impact events that leave lasting impressions on your audience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-lg bg-gradient-to-r from-blue-400 to-green-400"
              >
                <FaHandshake size={20} className="text-white" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                Expert Consultation
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional guidance to navigate your brand's influencer marketing journey with strategic insights.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm"
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-yellow-400 mb-2"
              >
                500+
              </motion.div>
              <div className="text-gray-300 text-sm">Influencers</div>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-violet-400 mb-2"
              >
                100+
              </motion.div>
              <div className="text-gray-300 text-sm">Celebrities</div>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-blue-400 mb-2"
              >
                50+
              </motion.div>
              <div className="text-gray-300 text-sm">Industries</div>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-green-400 mb-2"
              >
                98%
              </motion.div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;