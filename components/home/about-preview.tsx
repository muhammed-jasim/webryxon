"use client";

import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutPreview() {
  const { ref, inView } = useAnimateOnScroll(0.2);

  return (
    <section ref={ref} className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Webryxon"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-card shadow-lg p-5 rounded-lg max-w-[280px]">
              <p className="text-4xl font-bold mb-2">2+ Years</p>
              <p className="text-muted-foreground">
                Of experience in delivering digital excellence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turning Ideas into Digital Reality
            </h2>
            <p className="text-muted-foreground mb-6">
              Webryxon is a team of passionate digital experts dedicated to
              helping businesses thrive in the digital landscape. We combine
              creativity, technology, and strategy to deliver solutions that
              make a difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Strategic approach",
                "Creative solutions",
                "Modern technologies",
                "Customer-focused",
                "Continuous support",
                "Result-driven",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-brand mr-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-brand hover:bg-brand-dark">
              <Link href="/about">More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
