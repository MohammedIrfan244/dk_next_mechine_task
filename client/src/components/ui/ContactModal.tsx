import React, { useState } from "react"
import axiosError from "../../lib/utils/axiosError"
import axios from "axios"
import { categories } from "../../lib/data";
import { toast } from "react-toastify";

function ContactModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        business: "",
        avgBudget: 0,
        category: "",
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: name === "avgBudget" ? Number(value) : value,
        }))
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + "/mail/influencer", formData)
            toast.success(res.data.message || "✅ Mail sent successfully")
        } catch (error) {
            console.log(axiosError(error))
            toast.error(axiosError(error) || "❌ Something went wrong")
        } finally {
            setLoading(false)
            closeModal()
        }
    }
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 border-2 border-violet-500/30 rounded-3xl p-8 w-full max-w-md shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-violet-400/5 rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-violet-400"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-violet-400 bg-clip-text text-transparent">
                            Connect with an Influencer
                        </h2>
                        <button
                            onClick={closeModal}
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700/50"
                        >
                            ✕
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 rounded-full px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 rounded-full px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                            required
                        />
                        <input
                            type="text"
                            name="business"
                            placeholder="Business Name"
                            value={formData.business}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 rounded-full px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                            required
                        />
                        <input
                            type="number"
                            name="avgBudget"
                            placeholder="Average Budget"
                            value={formData.avgBudget}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 rounded-full px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                            required
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border-2 border-blue-900 bg-stone-800 text-white rounded-full px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                            required
                        >
                            <option value="" disabled>
                                Select Category
                            </option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full ${
                                loading
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-gradient-to-r from-yellow-400 to-violet-400 hover:from-yellow-500 hover:to-violet-500"
                            } text-black font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25`}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactModal
