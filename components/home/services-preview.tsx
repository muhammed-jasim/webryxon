"use client";

import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, LayoutGrid, PenTool, LineChart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build scalable, high-performance websites and web applications using modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: LayoutGrid,
    title: "Web Design",
    description:
      "User-centered designs that are both visually stunning and highly functional.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description:
      "Eye-catching graphics that strengthen your brand identity and message.",
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description:
      "Data-driven strategies that increase visibility and drive conversions.",
  },
];

export function ServicesPreview() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="section-padding ">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We provide end-to-end digital solutions that help businesses grow
            and succeed in the digital world.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-brand/10 w-fit rounded-lg">
                    <service.icon className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    asChild
                    className="p-0 text-brand hover:text-brand-dark"
                  >
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
