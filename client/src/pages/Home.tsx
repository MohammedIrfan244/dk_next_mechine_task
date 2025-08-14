import { FaCheckCircle, FaHandshake, FaInstagram, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 0.8, 0.6, 0.4])
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "linear" }
  }
  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  };
  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "linear" }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  return (
    <div ref={containerRef} className="bg-black px-5 md:px-10 min-h-screen">
      <section className="text-white w-full flex flex-col md:flex-row">
        <motion.div
          className="w-1/2 flex flex-col gap-4 md:gap-8 h-screen justify-center"
          style={{ y, opacity, scale }}
        >
          <motion.span
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            className="py-2 px-4 text-xs md:text-sm text-center rounded-full max-w-64 border border-violet-400/50 bg-gradient-to-r from-violet-900/20 to-blue-900/20 backdrop-blur-sm shadow-lg"
          >
            Find your best choice with us
          </motion.span>
          <motion.h1
            {...fadeInLeft}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-start leading-tight"
          >
            Looking for an <span className="bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">influencer</span> for your brand?
          </motion.h1>
          <motion.h1
            {...fadeInLeft}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl text-start shrikhand-regular bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-sm"
          >
            We got you covered
          </motion.h1>
          <motion.button
            {...scaleIn}
            transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center rounded-full border-2 border-violet-400/50 px-6 py-3 max-w-40 bg-gradient-to-r from-yellow-400 to-violet-400 hover:from-yellow-500 hover:to-violet-500 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm text-violet-900 font-semibold text-sm"
          >
            Connect now
          </motion.button>
        </motion.div>
        <motion.div
          className="w-1/2 h-screen flex items-center justify-center gap-4"
          style={{ scale }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -12, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2, ease: "linear" }}
            whileHover={{
              rotate: -8,
              scale: 1.03,
              boxShadow: "0 25px 50px rgba(234, 179, 8, 0.4)"
            }}
            className="w-40 h-60 md:w-60 md:h-80 bg-gradient-to-br from-yellow-400 to-yellow-600 overflow-hidden rounded-2xl border-2 border-violet-500 shadow-2xl hover:shadow-violet-500/25 transition-all duration-300"
          >
            <img
              src="https://i.pinimg.com/736x/fa/5a/f2/fa5af263137e8eedd86dbdc8409e73b5.jpg"
              alt="Instagram Food influencer"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 12, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.2, ease: "linear" }}
            whileHover={{
              rotate: 8,
              scale: 1.03,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
            }}
            className="w-40 h-60 md:w-60 md:h-80 bg-gradient-to-br from-violet-400 to-violet-600 overflow-hidden rounded-2xl border-2 border-blue-500 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <img
              src="https://i.pinimg.com/736x/31/76/10/3176103faff222296ee09a59824e5f3a.jpg"
              alt="Instagram Fashion influencer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="py-20 px-5 md:px-10">
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent"
        >
          Why Choose Us
        </motion.h3>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              icon: "🚀",
              title: "Faster Connections",
              description: "Quickly connect with influencers and celebrities in just a few steps — no long wait times."
            },
            {
              icon: "🎯",
              title: "Right Audience Match",
              description: "Our network covers diverse niches so your brand reaches the exact audience it needs."
            },
            {
              icon: "💬",
              title: "Personalized Support",
              description: "From first contact to campaign completion, our team guides you every step of the way."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
              }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-violet-500/30 backdrop-blur-sm hover:border-violet-400 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-violet-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05 + 0.15, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-5xl mb-4 block"
              >
                {item.icon}
              </motion.span>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-75px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
        >
          {[
            {
              icon: FaInstagram,
              title: "Influencer Marketing",
              description: "Work with authentic creators who align with your brand to create genuine impact and reach your target audience effectively.",
              colors: "from-yellow-400 to-violet-400",
              borderColors: "border-yellow-400/20 hover:border-yellow-400/40",
              bgColors: "from-yellow-500/10 to-violet-500/10",
              hoverColor: "hover:text-yellow-400"
            },
            {
              icon: FaStar,
              title: "Celebrity Booking",
              description: "Bring star power to your event with premium celebrities who will leave your guests talking for years to come.",
              colors: "from-violet-400 to-blue-400",
              borderColors: "border-violet-400/20 hover:border-violet-400/40",
              bgColors: "from-violet-500/10 to-blue-500/10",
              hoverColor: "hover:text-violet-400"
            },
            {
              icon: FaHandshake,
              title: "Expert Consultation",
              description: "Not sure where to start? Get expert guidance to navigate the world of influencer marketing and celebrity collaborations.",
              colors: "from-blue-400 to-green-400",
              borderColors: "border-blue-400/20 hover:border-blue-400/40",
              bgColors: "from-blue-500/10 to-green-500/10",
              hoverColor: "hover:text-blue-400"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 40, rotateX: -15 },
                animate: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.4, delay: index * 0.01 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
              }}
              className={`group relative overflow-hidden p-10 rounded-3xl bg-gradient-to-br ${service.bgColors} border-2 ${service.borderColors} transition-all duration-500`}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.01 + 0.25, duration: 0.3 }}
                viewport={{ once: true }}
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.colors} origin-left`}
              ></motion.div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-full bg-gradient-to-r ${service.colors} text-white`}
                >
                  <service.icon size={28} />
                </motion.div>
                <h2 className={`text-2xl font-bold text-white group-${service.hoverColor} transition-colors duration-300`}>
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="py-20 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-yellow-900/20"></div>
        <div className="relative z-10">
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-yellow-400 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: FaCheckCircle,
                title: "1. Tell Us Your Needs",
                description: "Share your goals, budget, and target audience.",
                colors: "from-green-400 to-emerald-400",
                shadowColor: "shadow-green-400/25",
                hoverColor: "group-hover:text-green-400",
                bgColors: "from-green-500/5 to-emerald-500/5"
              },
              {
                icon: FaCheckCircle,
                title: "2. Get Matched",
                description: "We connect you with the right influencer or celebrity.",
                colors: "from-violet-400 to-purple-400",
                shadowColor: "shadow-violet-400/25",
                hoverColor: "group-hover:text-violet-400",
                bgColors: "from-violet-500/5 to-purple-500/5"
              },
              {
                icon: FaCheckCircle,
                title: "3. Make It Happen",
                description: "Launch your campaign or host your event successfully.",
                colors: "from-yellow-400 to-orange-400",
                shadowColor: "shadow-yellow-400/25",
                hoverColor: "group-hover:text-yellow-400",
                bgColors: "from-yellow-500/5 to-orange-500/5"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 25, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                className="group relative text-center p-8"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColors} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
                ></motion.div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-6 rounded-full bg-gradient-to-r ${step.colors} text-white mb-6 transition-transform duration-300 shadow-lg ${step.shadowColor}`}
                  >
                    <step.icon size={32} />
                  </motion.div>

                  <h4 className={`text-2xl font-bold text-white mb-4 ${step.hoverColor} transition-colors duration-300`}>
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r ${step.colors} transform -translate-y-1/2 origin-left`}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a1a1a] text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-black/40"
        ></motion.div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Boost Your Brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-lg text-gray-300 mb-10"
          >
            Connect with the right influencer or celebrity today and watch your brand grow.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(234, 179, 8, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 bg-gradient-to-r from-yellow-200 to-pink-300 text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Home;