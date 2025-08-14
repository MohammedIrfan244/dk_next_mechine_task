import { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaComments,
  FaMoneyBillWave,
  FaInfoCircle,
  FaInstagram,
  FaStar,
  FaPalette,
  FaGift,
  FaDollarSign,
  FaEnvelope
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { CelebrityData, InfluencerData, InfoData } from "../lib/type";
import { categories, events } from "../lib/data";
import axios from "axios";
import axiosError from "../lib/utils/axiosError";
import { toast } from "react-toastify";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [target, setTarget] = useState<string>("info");
  const [loading, setLoading] = useState(false);

  const [infoData, setInfoData] = useState<InfoData>({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [influencerData, setInfluencerData] = useState<InfluencerData>({
    name: "",
    email: "",
    business: "",
    avgBudget: 0,
    category: "",
  });
  const [celebrityData, setCelebrityData] = useState<CelebrityData>({
    name: "",
    email: "",
    business: "",
    event: "",
    budget: 0,
  });

  const handleInfoChange = (field: keyof InfoData, value: string) => {
    setInfoData((prev) => ({ ...prev, [field]: value }));
  };
  const handleInfluencerChange = (field: keyof InfluencerData, value: string) => {
    setInfluencerData((prev) => ({
      ...prev,
      [field]: field === "avgBudget" ? Number(value) : value,
    }));
  };
  const handleCelebrityChange = (field: keyof CelebrityData, value: string) => {
    setCelebrityData((prev) => ({
      ...prev,
      [field]: field === "budget" ? Number(value) : value,
    }));
  };

  const resetForm = () => {
    setInfoData({ name: "", email: "", business: "", message: "" });
    setInfluencerData({ name: "", email: "", business: "", avgBudget: 0, category: "" });
    setCelebrityData({ name: "", email: "", business: "", event: "", budget: 0 });
  };

  const getPageTitle = () => {
    switch (target) {
      case "info":
        return "Get Expert Marketing Consultation";
      case "influencer":
        return "Connect with Top Influencers";
      case "celebrity":
        return "Book Premium Celebrity Talent";
      default:
        return "Elevate Your Business";
    }
  };

  const getPageSubtitle = () => {
    switch (target) {
      case "info":
        return "Strategic guidance for your marketing success";
      case "influencer":
        return "Drive authentic engagement with perfect creator matches";
      case "celebrity":
        return "Make your events legendary with A-list personalities";
      default:
        return "With expert guidance";
    }
  };

  const getTargetConfig = () => {
    const baseContainer =
      "bg-gradient-to-br from-gray-900/80 to-black/80 border-violet-500/30 shadow-xl backdrop-blur-sm";
    const baseInput =
      "border-gray-600 focus:border-violet-400 focus:ring-violet-400/20 bg-gray-800/50 text-white placeholder-gray-400";
    const baseButton =
      "from-yellow-400 to-violet-400 hover:from-yellow-500 hover:to-violet-500";
    switch (target) {
      case "info":
        return {
          title: "Request Expert Consultation",
          subtitle: "Get personalized marketing strategy insights",
          gradient: "from-yellow-400 to-violet-400",
          icon: <FaInfoCircle className="text-2xl text-white" />,
          containerStyle: baseContainer,
          inputStyle: baseInput,
          buttonGradient: baseButton,
        };
      case "influencer":
        return {
          title: "Find Your Ideal Creator Partner",
          subtitle: "Connect with influencers who align with your brand values",
          gradient: "from-yellow-400 to-violet-400",
          icon: <FaInstagram className="text-2xl text-white" />,
          containerStyle: baseContainer,
          inputStyle: baseInput,
          buttonGradient: baseButton,
        };
      case "celebrity":
        return {
          title: "Secure A-List Celebrity Talent",
          subtitle: "Transform your event into an unforgettable experience",
          gradient: "from-yellow-400 to-violet-400",
          icon: <FaStar className="text-2xl text-white" />,
          containerStyle: baseContainer,
          inputStyle: baseInput,
          buttonGradient: baseButton,
        };
    }
  };

  const config = getTargetConfig();
  const currentData =
    target === "info"
      ? infoData
      : target === "influencer"
        ? influencerData
        : celebrityData;

  const submitForm = async () => {
    setLoading(true);
    try {
      if (target === "info") {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/mail/info", infoData);
        toast.success(res.data.message || "✅ Mail sent successfully")
        return
      }
      else if (target === "influencer") {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/mail/influencer", influencerData);
        toast.success(res.data.message || "✅ Mail sent successfully")
        return
      }
      else if (target === "celebrity") {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/mail/celebrity", celebrityData);
        toast.success(res.data.message || "✅ Mail sent successfully")
        return
      }
      resetForm();
    } catch (error) {
      toast.error(axiosError(error) || "❌ Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-32 bg-gradient-to-br from-black via-gray-900 to-[#1a1a1a] flex flex-col items-center p-6">
      <div className="max-w-2xl w-full">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-extrabold italic text-white drop-shadow-md shrikhand-regular"
          >
            {getPageTitle()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 font-semibold"
          >
            {getPageSubtitle()}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="flex gap-2 mb-8 p-2 bg-gray-800/50 rounded-full shadow-md border-2 border-gray-600 backdrop-blur-sm"
        >
          {(["info", "influencer", "celebrity"]).map((t, index) => {
            const isActive = target === t;
            return (
              <motion.button
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTarget(t)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 font-semibold ${isActive
                  ? `bg-gradient-to-r from-yellow-400 to-violet-400 text-black shadow-lg transform scale-105`
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
              >
                {t === "info" && <FaInfoCircle />}
                {t === "influencer" && <FaInstagram />}
                {t === "celebrity" && <FaStar />}
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </motion.button>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className={`rounded-2xl p-6 mb-6 border-2 ${config?.containerStyle}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`p-3 rounded-full bg-gradient-to-r ${config?.gradient}`}
            >
              {config?.icon}
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-2xl font-bold text-white italic"
              >
                {config?.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-gray-300 font-medium mt-1"
              >
                {config?.subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className={`rounded-2xl p-8 border-2 ${config?.containerStyle}`}
        >
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <label className="flex items-center gap-2 font-semibold text-white mb-2">
                <FaUser className="text-violet-400" /> Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                required
                type="text"
                value={currentData.name}
                onChange={(e) => {
                  if (target === "info") handleInfoChange("name", e.target.value);
                  else if (target === "influencer") handleInfluencerChange("name", e.target.value);
                  else handleCelebrityChange("name", e.target.value);
                }}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <label className="flex items-center gap-2 font-semibold text-white mb-2">
                <FaEnvelope className="text-violet-400" /> Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                required
                type="email"
                value={currentData.email}
                onChange={(e) => {
                  if (target === "info") handleInfoChange("email", e.target.value);
                  else if (target === "influencer") handleInfluencerChange("email", e.target.value);
                  else handleCelebrityChange("email", e.target.value);
                }}
                placeholder="Enter your Email address"
                className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <label className="flex items-center gap-2 font-semibold text-white mb-2">
                <FaBriefcase className="text-violet-400" /> Business Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                required
                type="text"
                value={currentData.business}
                onChange={(e) => {
                  if (target === "info") handleInfoChange("business", e.target.value);
                  else if (target === "influencer") handleInfluencerChange("business", e.target.value);
                  else handleCelebrityChange("business", e.target.value);
                }}
                placeholder="Enter your business/company name"
                className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
              />
            </motion.div>
            {target === "info" && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <label className="flex items-center gap-2 font-semibold text-white mb-2">
                  <FaComments className="text-violet-400" /> Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                  value={infoData.message}
                  onChange={(e) => handleInfoChange("message", e.target.value)}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-2xl border-2 outline-none resize-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
                />
              </motion.div>
            )}

            {target === "influencer" && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <label className="flex items-center gap-2 font-semibold text-white mb-2">
                    <FaMoneyBillWave className="text-violet-400" /> Average Campaign Budget
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                    required
                    type="number"
                    value={influencerData.avgBudget}
                    onChange={(e) => handleInfluencerChange("avgBudget", e.target.value)}
                    placeholder="e.g. 100000"
                    className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <label className="flex items-center gap-2 font-semibold text-white mb-2">
                    <FaPalette className="text-violet-400" /> Industry Category
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                    value={influencerData.category}
                    onChange={(e) => handleInfluencerChange("category", e.target.value)}
                    className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
                  >
                    <option value="">Select your industry</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-gray-800 text-white">
                        {cat}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>
              </>
            )}
            {target === "celebrity" && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <label className="flex items-center gap-2 font-semibold text-white mb-2">
                    <FaGift className="text-violet-400" /> Event Type
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                    value={celebrityData.event}
                    onChange={(e) => handleCelebrityChange("event", e.target.value)}
                    className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
                  >
                    <option value="">Select event type</option>
                    {events.map((evt) => (
                      <option key={evt} value={evt} className="bg-gray-800 text-white">
                        {evt}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <label className="flex items-center gap-2 font-semibold text-white mb-2">
                    <FaDollarSign className="text-violet-400" /> Event Budget
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                    required
                    type="number"
                    value={celebrityData.budget}
                    onChange={(e) => handleCelebrityChange("budget", e.target.value)}
                    placeholder="e.g., 2000000"
                    className={`w-full px-4 py-3 rounded-full border-2 outline-none focus:ring-2 transition-all duration-300 ${config?.inputStyle}`}
                  />
                </motion.div>
              </>
            )}
            <motion.button
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 2.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              onClick={submitForm}
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-full font-bold text-black transition-all duration-300 transform shadow-lg bg-gradient-to-r ${config?.buttonGradient} ${loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-violet-500/25"
                }`}
            >
              {loading
                ? "Sending..."
                : target === "info"
                  ? "Get Free Consultation"
                  : target === "influencer"
                    ? "Find My Influencer"
                    : "Book Celebrity"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}