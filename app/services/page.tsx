"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  LayoutGrid,
  PenTool,
  LineChart,
  ShoppingCart,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build custom websites and web applications that are fast, responsive, and secure.",
    features: [
      "Custom web application development",
      "E-commerce solutions",
      "CMS implementation",
      "API development and integration",
      "Progressive Web Apps (PWAs)",
      "Responsive design",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "WordPress",
      "Laravel",
      "Python",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We create native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform development",
      "UI/UX design for mobile",
      "App testing and deployment",
      "App maintenance and support",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Web Design",
    description:
      "We craft beautiful, user-centered designs that enhance brand identity and improve conversions.",
    features: [
      "Responsive web design",
      "User experience (UX) design",
      "User interface (UI) design",
      "Wireframing and prototyping",
      "Landing page design",
      "Design systems",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "InVision",
    ],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description:
      "We create visually stunning graphics that strengthen your brand identity and message.",
    features: [
      "Logo design",
      "Brand identity",
      "Print design",
      "Packaging design",
      "Social media graphics",
      "Illustration",
    ],
    technologies: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "After Effects",
      "Procreate",
      "Blender",
    ],
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description:
      "We implement data-driven marketing strategies that increase visibility and drive conversions.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) advertising",
      "Social media marketing",
      "Content marketing",
      "Email marketing",
      "Analytics and reporting",
    ],
    technologies: [
      "Google Analytics",
      "Google Ads",
      "Meta Ads",
      "Mailchimp",
      "SEMrush",
      "Ahrefs",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "We build online stores that provide seamless shopping experiences and drive sales.",
    features: [
      "Custom e-commerce development",
      "Shopping cart implementation",
      "Payment gateway integration",
      "Inventory management",
      "Customer account management",
      "Order processing systems",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Stripe",
      "PayPal",
    ],
  },
];

export default function ServicesPage() {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions tailored to meet your business
              needs and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
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
                    <h2 className="font-bold text-xl mb-3">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <Tabs defaultValue="features" className="w-full">
                      <TabsList className="w-full mb-4">
                        <TabsTrigger value="features" className="flex-1">
                          Features
                        </TabsTrigger>
                        <TabsTrigger value="tech" className="flex-1">
                          Technologies
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="features" className="mt-0">
                        <ul className="space-y-1">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="tech" className="mt-0">
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-muted rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure we deliver the best
              results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "We create a detailed roadmap and strategy for your project.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "Our team works diligently to bring your vision to life.",
              },
              {
                number: "04",
                title: "Delivery",
                description:
                  "We deliver the final product and provide ongoing support.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
              >
                <div className="text-5xl font-bold text-brand/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
