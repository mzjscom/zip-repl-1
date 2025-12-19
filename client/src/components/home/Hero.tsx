"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-[#0a1a0f] via-[#0d1f12] to-black overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_70%)]" />
      
      <div className="container relative z-10 px-4 sm:px-6 md:px-8 flex flex-col items-center pt-16 sm:pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.span
            className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            اكتشف
          </motion.span>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            الطريقة الجديدة
            <br />
            للإقلاع عن التدخين
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
        >
          <p className="text-primary text-base sm:text-lg md:text-xl font-medium mb-3">
            اقلع عن التدخين مع اظرف دزرت
          </p>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
            حوّل تجربتك إلى بديل خالٍ من التبغ مع دزرت دون دخان، أو رائحة، أو قيود.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-10 sm:mb-12 w-full max-w-md px-4"
        >
          <a href="/products">
            <Button
              variant="outline"
              size="lg"
              className="w-full py-6 sm:py-7 text-lg sm:text-xl font-bold border-2 border-white/80 bg-transparent hover:bg-white/10 text-white rounded-xl transition-all hover:scale-[1.02]"
            >
              ابدأ الان
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative w-full max-w-lg mx-auto"
        >
          <div className="relative flex items-end justify-center">
            <motion.div
              className="absolute left-4 sm:left-8 bottom-4 flex flex-col gap-1 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-2 border-white/20 flex items-center justify-center shadow-lg">
                <span className="text-[8px] sm:text-[10px] text-white font-bold">DZRT</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-white/20 flex items-center justify-center shadow-lg -mt-2">
                <span className="text-[8px] sm:text-[10px] text-white font-bold">DZRT</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-2 border-white/20 flex items-center justify-center shadow-lg -mt-2">
                <span className="text-[8px] sm:text-[10px] text-white font-bold">DZRT</span>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              animate={{ 
                y: [0, -8, 0],
                rotateZ: [-2, 2, -2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img
                src="/hero-banner.webp"
                alt="DZRT Nicotine Pouches"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 right-8 sm:right-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-green-500/30">
                  <path
                    d="M50 10 C30 30, 20 50, 30 70 C40 90, 60 90, 70 70 C80 50, 70 30, 50 10"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs sm:text-sm">مرر للأسفل</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
