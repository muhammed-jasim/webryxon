'use client';

import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Development',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export function PortfolioPreview() {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <section ref={ref} className="section-padding">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Latest Work
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground max-w-xl"
            >
              Take a look at some of our recent projects where we've helped clients achieve their digital goals.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp} className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="group">
              <Link href="/portfolio">
                All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="group relative overflow-hidden rounded-lg">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <Button variant="ghost" asChild className="p-0 text-white">
                    <Link href="/portfolio">View Project</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}