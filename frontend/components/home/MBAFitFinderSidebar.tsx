"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Brain, Target } from "lucide-react"

export default function MBAFitFinderSidebar() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed right-0 top-1/3 z-40"
        >
            <Link href="/mba-fit-finder">
                <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Blinking border effect */}
                    <motion.div
                        className="absolute inset-0 rounded-l-2xl"
                        animate={{
                            boxShadow: [
                                "0 0 0 0 rgba(245, 158, 11, 0.7)",
                                "0 0 0 10px rgba(245, 158, 11, 0)",
                                "0 0 0 0 rgba(245, 158, 11, 0)"
                            ]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Main button */}
                    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-l-2xl px-4 py-4 shadow-2xl flex items-center gap-3 cursor-pointer">

                        {/* Animated icon */}
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                <Brain className="w-7 h-7 text-white" />
                            </div>

                            {/* Sparkle effect */}
                            <motion.div
                                className="absolute -top-1 -right-1"
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 0.5
                                }}
                            >
                                <Sparkles className="w-4 h-4 text-yellow-200" />
                            </motion.div>
                        </motion.div>

                        {/* Text content */}
                        <div className="text-white">
                            <motion.div
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-xs font-bold uppercase tracking-wider opacity-90"
                            >
                                Discover Your
                            </motion.div>
                            <div className="text-lg font-extrabold leading-tight">
                                MBA Fit
                            </div>
                            <motion.div
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="flex items-center gap-1 text-xs font-semibold text-yellow-100 mt-1"
                            >
                                <Target className="w-3 h-3" />
                                Take Quiz →
                            </motion.div>
                        </div>
                    </div>

                    {/* Notification badge */}
                    <motion.div
                        className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        FREE
                    </motion.div>
                </motion.div>
            </Link>
        </motion.div>
    )
}
