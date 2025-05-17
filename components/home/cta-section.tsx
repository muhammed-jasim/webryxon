"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function CtaSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="section-padding bg-brand">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Start Your Digital Journey?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/80 mb-8 text-lg">
            Let's collaborate to create a digital solution that helps your
            business grow. Get in touch today to discuss your project.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-brand hover:bg-white/90"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-brand hover:bg-white/90"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
