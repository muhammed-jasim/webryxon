"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import {
  ChevronRight,
  Code,
  LayoutGrid,
  PenTool,
  LineChart,
  Smartphone,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-5 pb-16 md:pt-5 md:pb-2">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-3 py-1 text-sm font-medium bg-brand/10 text-brand rounded-full mb-4"
            >
              Digital Agency
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              We Create <span className="gradient-text">Digital Solutions</span>{" "}
              that Drive Growth
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              From web development to digital marketing, our expert team crafts
              tailored solutions that help your business thrive in the digital
              landscape.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand hover:bg-brand-dark"
              >
                <Link href="/contact">
                  Start a Project
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative lg:h-[500px] hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              {/* Background decorative elements */}
              <motion.div
                className="absolute top-0 right-8 w-64 h-64 bg-brand/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 left-12 w-48 h-48 bg-brand/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Floating service icons */}
              {[
                {
                  Icon: Code,
                  label: "Web Development",
                  position: "top-10 left-10 ",
                },
                {
                  Icon: LayoutGrid,
                  label: "Web Design",
                  position: "top-20 right-20",
                },
                {
                  Icon: PenTool,
                  label: "Graphic Design",
                  position: "bottom-20 left-0",
                },
                {
                  Icon: LineChart,
                  label: "Digital Marketing",
                  position: "bottom-10 right-8",
                },
                {
                  Icon: Smartphone,
                  label: "Mobile Apps",
                  position:
                    "top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`absolute ${
                    item.position
                  } bg-background shadow-lg rounded-xl p-4 flex flex-col items-center justify-center w-24 h-24 ${
                    index === 4 ? "w-28 h-28" : ""
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <item.Icon className="h-8 w-8 text-brand mb-2" />
                  <span className="text-xs font-medium text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
