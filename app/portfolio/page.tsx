'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-featured e-commerce platform with product management, cart, and payment integration.',
    image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Healthcare App',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'Material UI'],
    description: 'A mobile application for healthcare providers to manage patient appointments and records.',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    tags: ['SEO', 'PPC', 'Social Media'],
    description: 'A comprehensive digital marketing campaign that increased client visibility by 200%.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Corporate Branding',
    category: 'Graphic Design',
    tags: ['Logo Design', 'Brand Identity', 'Style Guide'],
    description: 'Complete brand identity redesign for a financial services company.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Restaurant Website',
    category: 'Web Design',
    tags: ['HTML/CSS', 'JavaScript', 'WordPress'],
    description: 'A responsive website for a high-end restaurant with online reservation system.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    tags: ['Flutter', 'Firebase', 'Health API'],
    description: 'A cross-platform fitness app that tracks workouts, nutrition, and progress.',
    image: 'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Categories for filtering
const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'Web Design',
  'Graphic Design',
  'Digital Marketing',
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useAnimateOnScroll(0.1);

  // Filter portfolio items based on selected category
  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              A showcase of our best work across web development, design, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-brand hover:bg-brand-dark" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-card overflow-hidden rounded-lg shadow-sm border border-border h-full flex flex-col">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <Badge variant="outline" className="bg-brand/10 text-brand border-brand/20">
                        {item.category}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}