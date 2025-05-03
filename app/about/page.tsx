"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";
import {
  CheckCircle2,
  Users,
  Award,
  Clock,
  Lightbulb,
  Target,
} from "lucide-react";

export default function AboutPage() {
  const { ref: missionRef, inView: missionInView } = useAnimateOnScroll();
  const { ref: valuesRef, inView: valuesInView } = useAnimateOnScroll(0.1);
  const { ref: teamRef, inView: teamInView } = useAnimateOnScroll(0.1);

  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Webryxon
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of digital experts passionate about creating
              innovative solutions that drive growth and success for our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              className="relative"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with innovative digital solutions that
                    drive growth, enhance user experiences, and create lasting
                    value in an ever-evolving digital landscape.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading digital agency known for crafting
                    exceptional digital experiences that transform businesses
                    and set new standards in the industry.
                  </p>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-3">What We Do</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Web Development",
                      "Mobile App Development",
                      "Web Design",
                      "Graphic Design",
                      "Digital Marketing",
                      "E-commerce Solutions",
                    ].map((item) => (
                      <div key={item} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-brand mr-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: Target },
              { number: "45+", label: "Happy Clients", icon: Users },
              { number: "5+", label: "Years Experience", icon: Clock },
              { number: "12", label: "Industry Awards", icon: Award },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-background rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center p-3 bg-brand/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              These principles guide everything we do and help us deliver
              exceptional results for our clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We constantly explore new ideas and technologies to deliver cutting-edge solutions.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We work closely with our clients, fostering partnerships that lead to exceptional outcomes.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from design to development to delivery.",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description:
                  "We focus on measurable results that contribute to our clients' business objectives.", // Escaped single quote
              },
              {
                icon: CheckCircle2,
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards, ensuring transparency and honesty.",
              },
              {
                icon: Clock,
                title: "Adaptability",
                description:
                  "We embrace change and evolve with the rapidly shifting digital landscape.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-brand/10 rounded-full mb-4">
                    <value.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="section-padding bg-muted/50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              A diverse group of passionate individuals dedicated to creating
              exceptional digital experiences.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                name: "Sarah Miller",
                role: "Design Director",
                image:
                  "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                name: "Michael Chen",
                role: "Lead Developer",
                image:
                  "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                name: "Emily Wilson",
                role: "Marketing Strategist",
                image:
                  "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((person, index) => (
              <motion.div
                key={person.name}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-card overflow-hidden rounded-lg shadow-sm">
                  <div className="relative h-64 w-full">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{person.name}</h3>
                    <p className="text-muted-foreground">{person.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  );
}
